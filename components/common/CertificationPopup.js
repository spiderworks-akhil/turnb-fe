 
import { useEffect, useMemo } from "react";
 import Image from 'next/image' 
import FeatImg from '../../public/img/popbg2.png'
import Feat2Img from '../../public/img/pop3.png'
 

function CertificationPopup({ isOpen = true, onClose = () => {} }) {
   
  return (
    <div className="cert-overlay" role="dialog" aria-modal="true" aria-label="Great Place To Work Certification">
      <div className="cert-card">
        <button type="button" className="cert-close" aria-label="Close popup" onClick={onClose}>
          &#10005;
        </button>

        <Image  width={520} height={550}
                        src={FeatImg}
                        className='particle_img'
                      />

        

        <div className="badge-wrap">
          <Image  width={260} height={266}
                        src={Feat2Img}
                        
                      />
        
        </div>

        <h2 className="cert-title">
          <span className="party-icon" role="img" aria-label="celebration">
            &#127881;
          </span>{" "}
          We are officially Great Place to Work&reg; Certified
        </h2>

        <div className="title-divider" />

        <p className="cert-copy">
          This milestone reflects the positive work culture, employee experience, and strong values we consistently
          strive to build and nurture.
        </p>
      </div>

      <style jsx>{`
        .cert-overlay {
          position: fixed;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(15, 19, 27, 0.2);
          z-index: 9999;
          padding: 20px;
        }

        .cert-card {
          width: min(84vw, 520px);
           
          border: 2px solid #3f8377;
          border-radius: 40px;
          box-shadow: 0 24px 65px rgba(33, 88, 80, 0.35);
          position: relative;
          overflow: hidden;
          text-align: center;
          background:
            linear-gradient(106deg, rgba(255, 255, 255, 0.95) 0%, rgba(246, 244, 241, 0.97) 44%, rgba(255, 255, 255, 0.96) 100%),
            radial-gradient(circle at 20% 20%, rgba(239, 240, 255, 0.5), transparent 56%);
          padding: 30px 22px 30px;
        }

         
        .cert-card::after {
          content: "";
          position: absolute;
          width: 100%;
          left: 0%;
          top: 0%;  
            height: 100%;
        background:url('../img/popbg.png') no-repeat  ;
        background-size: 100% auto;

           
        }
      

        .cert-close {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: none;
          background: rgba(226, 226, 226, 0.6);
          color: #9a9a9a;
          font-size: 16px;
          line-height: 1;
          cursor: pointer;
          z-index: 4;
        }

        .badge-wrap {
          width: 260px;
          margin: 0 auto -20px;
          position: relative;
          z-index: 2;
        }

        .badge-top {
          background: #ff1836;
          color: #ffffff;
          font-weight: 700;
          font-size: 20px;
          line-height: 1.02;
          display: flex;
          flex-direction: column;
          text-align: left;
          padding: 14px 14px;
          letter-spacing: 0.1px;
        }

        .badge-bottom {
          background: #07237d;
          color: #ffffff;
          clip-path: polygon(0 0, 100% 0, 100% 76%, 50% 100%, 0 76%);
          padding: 10px 8px 20px;
        }

        .badge-certified {
          margin: 0;
          font-size: 16px;
          font-weight: 700;
          line-height: 1;
        }

        .badge-date {
          margin: 7px 0 0;
          font-size: 10px;
          font-weight: 700;
        }

        .badge-country {
          margin: 8px 0 0;
          font-size: 17px;
          font-weight: 700;
        }

        .cert-title {
          margin: 0 auto;
          max-width: 390px;
          font-size: 29px;
          font-weight: 700;
          line-height: 1.35;
          background: linear-gradient(90deg, #b90fc3 0%, #5232c7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          position: relative;
          z-index: 2;
        }

        .party-icon {
          font-size: 20px;
          -webkit-text-fill-color: initial;
        }

        .title-divider {
          width: 64px;
          height: 3px;
          border-radius: 999px;
          margin: 12px auto 14px;
          background: linear-gradient(90deg, #f6b436 0%, #f4564a 50%, #4f80ff 100%);
        }

        .cert-copy {
          margin: 0 auto;
          max-width: 350px;
          color: #6f6f6f;
          font-size: 13px;
          line-height: 1.55;
          position: relative;
          z-index: 2;
        }

        .confetti {
          position: absolute;
          width: 10px;
          height: 16px;
          border-radius: 2px;
          z-index: 1;
          transform: rotate(26deg);
          opacity: 0.7;
        }

        .confetti-1 {
          top: 78px;
          left: 88px;
          background: #6ec985;
        }

        .confetti-2 {
          top: 128px;
          left: 45px;
          background: #ef8796;
        }

        .confetti-3 {
          top: 107px;
          right: 76px;
          background: #f1ad68;
        }

        .confetti-4 {
          top: 154px;
          right: 45px;
          background: #e38af1;
        }

        .confetti-5 {
          top: 335px;
          left: 78px;
          background: #9de2bc;
        }

        .confetti-6 {
          top: 375px;
          left: 120px;
          background: #f0d45b;
        }

        .confetti-7 {
          top: 330px;
          right: 88px;
          background: #ef9e5c;
        }

        .confetti-8 {
          top: 390px;
          right: 120px;
          background: #86d1f4;
        }

        .confetti-9 {
          bottom: 185px;
          left: 64px;
          background: #8ecf98;
        }

        .confetti-10 {
          bottom: 160px;
          right: 70px;
          background: #f0a2e2;
        }

        @media (max-width: 991px) {
          .cert-card {
            min-height: auto;
            border-radius: 28px;
            padding: 30px 18px 26px;
          }

          .cert-title {
            font-size: 28px;
          }

          .cert-copy {
            font-size: 15px;
          }
        }

        @media (max-width: 640px) {
          .cert-card {
            width: 92vw;
            padding: 24px 14px 20px;
            border-radius: 20px;
          }

          .cert-close {
            top: 14px;
            right: 14px;
            width: 34px;
            height: 34px;
            font-size: 18px;
          }

          .badge-wrap {
            width: 116px;
            margin-top: 8px;
          }

          .badge-top {
            font-size: 15px;
          }

          .badge-certified {
            font-size: 13px;
          }

          .badge-date {
            font-size: 9px;
          }

          .badge-country {
            font-size: 14px;
          }

          .cert-title {
            max-width: 100%;
            font-size: 22px;
            line-height: 1.35;
          }

          .party-icon {
            font-size: 17px;
          }

          .cert-copy {
            font-size: 12px;
            line-height: 1.55;
          }
        }
      `}</style>
    </div>
  );
}

export default CertificationPopup;
