import { currentDayName } from '@/lib/utils/dateUtils'
import Link from '@/components/common/Link'

export default function Footer() {
  return (
    <footer>
      <div className="mt-10 flex flex-col items-center">
        {/* NowPlayingFooter removed: component not found */}
        <div className="mb-2 hidden text-sm text-gray-500 dark:text-gray-400 md:flex">
          <div className="mx-1">
            <Link href="https://saiabhiteja.com" className="link-underline">
              saiaabhiteja{` © ${new Date().getFullYear()}`}
            </Link>
          </div>
          {`•`}
          <div className="mx-1">
            <Link href="https://qod.shakiltech.com/" className="link-underline">
              Have a good {currentDayName()}!
            </Link>
          </div>
          {`•`}
          <div className="mx-1">
            <Link href="/contact" className="link-underline">
              Contact
            </Link>
          </div>
        </div>
        <div className="mb-2 text-sm text-gray-500 dark:text-gray-400 sm:block md:hidden lg:hidden">
          <div className="mx-1">
            <Link href="https://saiabhiteja.com" className="link-underline">
              saiaabhiteja{` © ${new Date().getFullYear()}`}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
