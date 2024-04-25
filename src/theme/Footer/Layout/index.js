import React from 'react';
import clsx from 'clsx';
export default function FooterLayout({style, links, logo, copyright}) {
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}>
      <img className="wetf-footer-bg wetf-footer-bg-left" src="https://wetransform.to/wp-content/uploads/2022/04/bg-footer-2.svg" alt=""></img>
      <img className="wetf-footer-bg wetf-footer-bg-right" src="https://wetransform.to/wp-content/uploads/2022/04/bg-footer.svg" alt="">

      </img>
      <div className="container container-fluid">
        <div className="row">
          <div className="col col--3">
          <a aria-label="Logo Wetransform" href="https://wetransform.to" className="wetf-footer-logo">
            <img className="lazy " width="100" height="78" 
              src="https://wetransform.to/wp-content/uploads/2022/04/we-logo-white-300dpi-100x78-c-default.png"
              srcSet="https://wetransform.to/wp-content/uploads/2022/04/we-logo-white-300dpi-100x78-c-default@1x.png 1x, https://wetransform.to/wp-content/uploads/2022/04/we-logo-white-300dpi-100x78-c-default@2x.png 2x" 
              alt="Wetransform">
            </img>
          </a>  
          </div>
          <div className="col col--7 col--offset-2">
            {links}    
          </div>
        </div>
        
        {(logo || copyright) && (
          <div className="footer__bottom text--left">
            {logo && <div className="margin-bottom--sm">{logo}</div>}
            {copyright}
            <p>
              <a className='wetf-copyright-link' href="https://wetransform.to/imprint/">Imprint</a> | <a className='wetf-copyright-link' href="https://wetransform.to/privacy/">Data Privacy Policy</a></p>
          </div>
        )}
      </div>
    </footer>
  );
}
