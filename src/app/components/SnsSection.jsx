import Image from "next/image"
import Link from "next/link"
import styles from "./SnsSection.module.css"

const posts = [
  {
    image: "/images/sns/498927009_18507547132026120_2437442760571255162_n.jpg",
    link: "https://www.instagram.com/reel/DJqIlPlN8CN/",
  },
  {
    image: "/images/sns/497960862_18507200905026120_8744249986978426300_n.jpg",
    link: "https://www.instagram.com/reel/DJk-_HGtfdp/",
  },
  {
    image: "/images/sns/495438957_1037653805133911_51541607964517648_n.jpg",
    link: "https://www.instagram.com/p/DJaryxGP5Wy/",
  },
  {
    image: "/images/sns/495520822_1036823531883605_4402990906244405224_n.jpg",
    link: "https://www.instagram.com/p/DJVi623Te_a/",
  },
]

const icon_reel = "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbDpzcGFjZT0ncHJlc2VydmUnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJz48cGF0aCBmaWxsPScjZmZmJyBkPSdNMTE2IDUxMmgyODBWMEgxMTZ6bTIyOS0yNTYtMTU0IDg5VjE2N3pNNDkyIDBoLTY2djgxaDg2VjIwYzAtMTEtOS0yMC0yMC0yME0wIDIwdjYxaDg2VjBIMjBDOSAwIDAgOSAwIDIwbTAgOTFoODZ2NzdIMHptMCAxMDdoODZ2NzZIMHptMCAxMDZoODZ2NzdIMHptMCAxMDd2NjFjMCAxMSA5IDIwIDIwIDIwaDY2di04MXptNDI2LTIxM2g4NnY3NmgtODZ6bTAtMTA3aDg2djc3aC04NnptMCAzMjB2ODFoNjZjMTEgMCAyMC05IDIwLTIwdi02MXptMC0xMDdoODZ2NzdoLTg2eicvPjxwYXRoIGZpbGw9JyNmZmYnIGQ9J00yMjEgMjE5djc0bDY0LTM3eicvPjwvc3ZnPg=="
const icon_post = "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbDpzcGFjZT0ncHJlc2VydmUnIHZpZXdCb3g9JzAgMCA1MCA1MCc+PHBhdGggZmlsbD0nI2ZmZicgZD0nTTIgMTUuMWgzMWEyIDIgMCAwIDEgMiAydjMxYTIgMiAwIDAgMS0yIDJIMmEyIDIgMCAwIDEtMi0ydi0zMWMwLTEuMS45LTIgMi0yJy8+PHBhdGggZmlsbD0nI2ZmZicgZD0nTTUwIDMyLjlWMmEyIDIgMCAwIDAtMi0ySDE3YTIgMiAwIDAgMC0yIDJ2LjdjMCAxLjEuOSAyIDIgMmgyNy4zYy41IDAgMSAuNSAxIDFWMzNjMCAxLjEuOSAyIDIgMmguN2MxLjEtLjEgMi0xIDItMi4xJy8+PHBhdGggZmlsbD0nI2ZmZicgZD0nTTQyLjUgNDAuNXYtMzFhMiAyIDAgMCAwLTItMmgtMzFhMiAyIDAgMCAwLTIgMnYuOGMwIDEuMS45IDIgMiAyaDI3LjNjLjYgMCAxIC40IDEgMXYyNy4zYzAgMS4xLjkgMiAyIDJoLjdjMS4xLS4xIDItMSAyLTIuMScvPjwvc3ZnPg=="

export default function SnsSection() {
  return (
    <section className={styles.snsSection}>
      <div className={styles.inner}>
        <div className={styles.snsHeader}>
          <div className={styles.snsTitle}>
            <img src="/images/mobile/main_title_02.png"/>
          </div>
          <div className={styles.socialIcons}>
            <Link href="https://www.facebook.com/sulbing/" target="_blank" rel="noopener noreferrer">
              <img src="/images/mobile/btn_sns_01.png"/>
            </Link>
            <Link href="https://www.instagram.com/sulbing.official/" target="_blank" rel="noopener noreferrer">
              <img src="/images/mobile/btn_sns_02.png"/>
            </Link>
            <Link href="https://www.youtube.com/channel/UCONc8COTeorBxmuVIvHVPAQ" target="_blank" rel="noopener noreferrer">
              <img src="/images/mobile/btn_sns_03.png"/>
            </Link>
          </div>
        </div>

        <div className={styles.snsGrid}>
          {posts.map((post, index) => (
            <Link key={index} className={styles.snsPost} href={post.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={post.image}
                alt={post.link}
                width={500}
                height={500}
                className={styles.postImage}
              />
              <img 
                src={post.link.includes('/reel/') ? icon_reel : icon_post}
                alt={post.link.includes('/reel/') ? "릴스" : "포스트"}
                className={styles.postIcon}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
