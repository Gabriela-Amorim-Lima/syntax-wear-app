import iconInstagram from '@/assets/images/icone-instagram.png'
import iconWhatsapp from '@/assets/images/icone-whatsapp.png'
import iconTiktok from '@/assets/images/icone-tiktok.png'
import iconFacebook from '@/assets/images/icone-facebook.png'

const socialLinks = [
    { href: "#", icon: iconInstagram, name: "Instagram" },
    { href: "#", icon: iconFacebook, name: "Facebook" },
    { href: "#", icon: iconTiktok, name: "Tiktok" },
    { href: "#", icon: iconWhatsapp, name: "Whatsapp" },
];

export const SocialLinks = () => {
    return (
        <div>
            <p className='mb-4 text-xl font-medium text-surface-alt'>Redes Sociais</p>

            <ul className='flex gap-5'>
                {socialLinks.map(({ href, icon, name }) => (
                    <li key={name}>
                        <a href={href} aria-label={name}>
                            <img src={icon} alt={name} />
                        </a>
                    </li>
                ))}
            </ul>
        </div>

    )
}