import path from "path";
import fs from "fs";

const VALID_SLUGS = ["Turn-B-Brochure", "Scan-B-Brochure"];

export async function getServerSideProps(context) {
  const { req, res, params } = context;
  const { slug } = params;

  // 1. Validate slug
  if (!VALID_SLUGS.includes(slug)) {
    return { notFound: true };
  }

  // 2. Check for access cookie set after successful form submission
  const cookieName = `brochure_access_${slug.replace(/-/g, "_")}`;
  const cookie = req.cookies?.[cookieName];

  if (!cookie || cookie !== "granted") {
    // End the response and send 403
    res.statusCode = 403;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Access denied. Please submit the form first." }));
    return { props: {} };
  }

  // 3. Serve the PDF from the private folder
  const filePath = path.join(process.cwd(), "private", "brochure", `${slug}.pdf`);

  if (!fs.existsSync(filePath)) {
    return { notFound: true };
  }

  const stat = fs.statSync(filePath);
  const fileStream = fs.createReadStream(filePath);

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Length", stat.size);
  // Prevent caching so users can't reuse a stale response
  res.setHeader("Cache-Control", "no-store");
  // Allow inline viewing (not forced download) in the iframe
  res.setHeader("Content-Disposition", `inline; filename="${slug}.pdf"`);

  fileStream.pipe(res);

  await new Promise((resolve) => {
    fileStream.on("end", resolve);
    fileStream.on("error", resolve);
  });

  return { props: {} };
}

export default function BrochureView() {
  return null;
}
