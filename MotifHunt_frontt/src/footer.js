import image from './motifHunts-removebg-preview.png';

const Footer = () => {
    return (
        <div class="card-footer text-body-secondary" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <img src={image} alt="MotifHunts" style={{ maxWidth: '10%', maxHeight: '90px' }} />
            <p>Terms of use | Privacy policy</p>
        </div>

    );
}
export default Footer;