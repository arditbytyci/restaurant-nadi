import { motion } from "framer-motion";

interface ForkKnifeProps {
  open: boolean;
  className?: string;
  color?: string;
}

export const ForkKnife: React.FC<ForkKnifeProps> = ({
  open,
  className,
  color = "#ffeedd",
}) => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`h-20 md:h-22 xl:h-30 w-auto  lg:p-4  rounded-full ${className} transition-colors duration-300 relative z-60`}
      style={{ willChange: "transform" }}
    >
      <motion.g
        animate={open ? { rotate: 40, x: 4, y: 2 } : { rotate: 0, x: 0, y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 14 }}
        style={{ transformOrigin: "50px 60px" }}
      >
        <path
          d="M52.6074 35.405C52.6074 24.3132 50.3071 11.4756 48.9269 1.07703V1H47.7L47.6693 31.0145C47.6693 32.5807 47.2246 33.8645 46.2891 33.8645C45.415 33.8645 45.0623 32.7604 44.9703 31.3226C44.9549 31.2199 44.9703 31.1172 44.9703 31.0145L43.3907 1H42.1638L40.7836 31.0402L40.7683 31.3226C40.6763 32.7604 40.2009 33.8645 39.3114 33.8645C38.3759 33.8645 37.9159 32.5807 37.9159 31.0145L37.8545 1H36.6277C35.2781 11.5269 32.9778 24.3389 32.9778 35.4307C32.9778 42.0292 35.2168 47.7805 38.606 50.3737C40.3236 51.6832 40.3389 53.0183 40.3389 53.0183C40.3389 53.0183 37.8852 104.806 37.8852 107.733C37.8852 110.66 38.4986 112.482 39.3421 113.895C40.1855 115.307 41.5197 116 42.7773 116H42.8386C44.0961 116 45.415 115.307 46.2738 113.895C47.1173 112.482 47.7 111.096 47.7 107.733C47.7 104.369 45.2463 53.0183 45.2463 53.0183C45.2463 53.0183 45.0929 51.7345 46.9946 50.2967C50.3071 47.7805 52.6074 42.0292 52.6074 35.405Z"
          fill={color}
        />
      </motion.g>

      <motion.g
        animate={
          open ? { rotate: -40, x: -4, y: 2 } : { rotate: 0, x: 0, y: 0 }
        }
        transition={{ type: "spring", stiffness: 120, damping: 14 }}
        style={{ transformOrigin: "50px 60px" }}
      >
        <path
          d="M65.7189 0C65.0711 0 64.5411 0.359375 64.1485 0.975446C60.4778 6.85379 53.6074 21.5882 53.6074 55.9855C53.6074 66.048 60.0852 66.048 59.8889 73.8002V73.9029C59.4963 85.9933 56.9641 102.422 56.7482 107.35C56.6696 111.252 58.6522 115 61.4789 115H61.5574C64.3841 115 66.1704 111.304 66.1704 107.402V1.61719C66.1704 0.333705 66.0722 0 65.7189 0Z"
          fill={color}
        />
      </motion.g>
    </svg>
  );
};
