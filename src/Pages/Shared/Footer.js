import React from 'react';

const Footer = () => {
    return (
        <div className='bg-secondary  p-10 mt-8 text-white'>
            <footer class="footer">
                <div>
                    <span class="footer-title">Products</span>
                    <div class="link link-hover">Exterior vehicle parts</div>
                    <div class="link link-hover">Interior function</div>
                    <div class="link link-hover">Innovative products</div>
                </div>
                <div>
                    <span class="footer-title">Blackstone Automotive</span>
                    <div class="link link-hover">About us</div>
                    <div class="link link-hover">Contact</div>
                    <div class="link link-hover">Careers</div>

                </div>
                <div>
                    <span class="footer-title">Legal</span>
                    <div class="link link-hover">Terms of use</div>
                    <div class="link link-hover">Privacy policy</div>
                    <div class="link link-hover">Cookie policy</div>
                </div>

            </footer>
            <div className='text-center pt-8'>
                <p>All Rights Reserved, Blackstone Automotive </p>
                <p><small>Copyright &copy; 2022</small></p>
            </div>
        </div>
    );
};

export default Footer;