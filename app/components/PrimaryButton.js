'use client';
import Link from "next/link";

export function PrimaryButton({ href, text }) {
    return (<Link href={href} className="primary-button">{text}</Link>);
}
