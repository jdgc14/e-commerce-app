import React from 'react';

const Footer = () => {


    return (
        <div className='p-4 paragraph-white bg-yellow-meli' style={{ minHeight: '25vh' }}>
            <div className='d-flex justify-content-evenly gap-5 m-auto'>
                <div>
                    <h2 style={{ fontWeight: '600' }}>E-commerce App</h2>
                    <h6>©2022 JDGC. All Rights Reserved.</h6>
                    <h6>Powered by <span>React</span><span>, Router</span> and <span>Redux</span>.</h6>
                </div>
                <div className='text-center'>
                    <h2 style={{ fontWeight: '600' }}>Contact</h2>
                    <a href="https://www.linkedin.com/in/jdgc14/">
                        <i class="fa-brands fa-linkedin buttons-footer"></i>
                    </a> <br />
                    <a href="https://github.com/jdgc14/">
                        <i class="fa-brands fa-github buttons-footer"></i>
                    </a><br />
                    <a href="mailto:joseojedapro@gmail.com">
                        <i class="fa-solid fa-envelope buttons-footer"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;