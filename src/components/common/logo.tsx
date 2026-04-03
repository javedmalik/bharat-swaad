import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/images/brand/logo.png"
        alt="Bharat Swaad logo"
        width={160}
        height={56}
        priority
        className="h-auto w-[130px] sm:w-[150px]"
      />
    </Link>
  );
}