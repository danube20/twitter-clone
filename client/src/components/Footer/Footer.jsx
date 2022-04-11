import { useLocation } from 'react-router-dom'
import './Footer.css'

const Footer = () => {

    const location = useLocation()
    const notShow = location.pathname.includes('signup') || location.pathname.includes('signin')
    const newClass = !notShow ? 'container' : 'footerNone'

    return (
        <footer className={newClass}>
            <p>About</p>
            <p>Help Center</p>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
            <p>Accessibility</p>
            <p>Ads info</p>
            <p>Blog</p>
            <p>Status</p>
            <p>Careers</p>
            <p>Brand Resources</p>
            <p>Advertising</p>
            <p>Marketing</p>
            <p>Twitter for Business</p>
            <p>Developers</p>
            <p>Directory</p>
            <p>Settings</p>
            <p>© 2022 Twitter, Inc.</p>
        </footer>
    )
}

export default Footer