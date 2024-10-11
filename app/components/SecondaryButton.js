import Link from "next/link";

export default function SecondaryButton ({ href, text }) {
    return <Link href={href} className="secondary-button">{text}</Link>;
}
