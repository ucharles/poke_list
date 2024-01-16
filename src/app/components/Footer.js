import Image from "next/image";
import Link from "next/link";
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div class="flex flex-col items-center bg-gray-200 p-4 text-gray-700">
      <p class="mb-2">© {currentYear} Poke List</p>
      <Link href="https://github.com/limelee85/poke_list" target="_blank">
        <div className="flex space-x-2">
          <Image
            src={"/icon/github.svg"}
            className="text-gray-700 hover:text-gray-900"
            width={24}
            height={24}
          />
          <span>GitHub</span>
        </div>
      </Link>
    </div>
  );
}

export default Footer;
