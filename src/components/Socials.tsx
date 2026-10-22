import Image from 'next/image'
import discordh from "@/assets/images/discordh.svg"
import ig from "@/assets/images/ig.svg"
import twitter from "@/assets/images/twitter.svg"

function Socials() {
    return (
        <div className="mt-[5px] flex flex-row gap-4 justify-center items-center">
            <a href="https://discord.gg/2qDaP66btQ"><Image src={discordh} alt="discord" width={30} height={30} /></a>
            <a href="https://www.instagram.com/voidondemand/"><Image src={ig} alt="ig" width={30} height={30} /></a>
            <a href="https://x.com/VOIDondemand"><Image src={twitter} alt="twitter" width={30} height={30} /></a>
        </div>
    )
}

export default Socials