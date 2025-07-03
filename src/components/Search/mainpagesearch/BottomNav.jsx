import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faMagnifyingGlass,
  faMobileScreen,
  faCirclePlay,
  faChartBar,
  faBullhorn,
} from "@fortawesome/free-solid-svg-icons";

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md border-t py-2">
      <div className="flex justify-around items-center text-gray-500 text-xs">
        {/* Top Stories */}
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faNewspaper} className="text-xl" />
          <span>Top Stories</span>
        </div>

        {/* Explore */}
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl" />
          <span>Explore</span>
        </div>

        {/* Shorts */}
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faMobileScreen} className="text-xl" />
          <span>Shorts</span>
        </div>

        {/* YouTube */}
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faCirclePlay} className="text-xl" />
          <span>YouTube</span>
        </div>

        {/* Polls */}
        <div className="flex flex-col items-center">
          <FontAwesomeIcon icon={faChartBar} className="text-xl" />
          <span>Polls</span>
        </div>

        {/* Ads (highlighted in red) */}
        <div className="flex flex-col items-center text-red-600">
          <FontAwesomeIcon icon={faBullhorn} className="text-xl" />
          <span>Ads</span>
        </div>
      </div>
    </div>
  );
}
