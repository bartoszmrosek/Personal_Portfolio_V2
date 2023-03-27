interface SvgRepoProps {
  type: "Link" | "Github" | "Email" | "Logo";
  size: { width: string; height: string };
  className?: string;
}
const SvgRepo: React.FC<SvgRepoProps> = ({ type, size, className }) => {
  switch (type) {
    case "Link":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width={size.width}
          height={size.height}
          fill="currentColor"
          className={className}
        >
          <title>Link logo</title>
          <path d="M 18 5 L 18 7 L 23.5625 7 L 11.28125 19.28125 L 12.71875 20.71875 L 25 8.4375 L 25 14 L 27 14 L 27 5 Z M 5 9 L 5 27 L 23 27 L 23 14 L 21 16 L 21 25 L 7 25 L 7 11 L 16 11 L 18 9 Z" />
        </svg>
      );
    case "Github":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size.width}
          height={size.height}
          viewBox="0 0 98 96"
          className={className}
        >
          <title>Github Logo</title>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
            fill="currentColor"
          />
        </svg>
      );
    case "Email":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fill="currentColor"
          width={size.width}
          height={size.height}
          version="1.1"
          id="Layer_1"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
          style={{ transform: "translate(0, 10%)" }}
        >
          <title>Email logo</title>
          <g>
            <g>
              <path d="M496.327,127.091l-15.673,9.613L281.83,258.623c-7.983,4.859-16.917,7.293-25.84,7.293s-17.826-2.424-25.778-7.262    l-0.136-0.084L31.347,134.771l-15.673-9.759L0,115.242v302.717h512V117.488L496.327,127.091z" />
            </g>
          </g>
          <g>
            <g>
              <path d="M25.245,94.041l25.161,15.673l25.161,15.673l171.008,106.527c5.841,3.521,13.082,3.511,18.913-0.042l173.652-106.486    l25.558-15.673l25.558-15.673H25.245z" />
            </g>
          </g>
        </svg>
      );
    case "Logo":
      return (
        <svg
          width={size.width}
          height={size.height}
          version="1.1"
          viewBox="0 0 210 297"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className={className}
        >
          <title>My personal logo</title>
          <defs>
            <linearGradient
              id="linearGradient37287"
              x1="105"
              x2="105"
              y1="61.182"
              y2="229.86"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#11f4fa" offset=".080386" />
              <stop stopColor="#2fd84b" offset=".5" />
              <stop stopColor="#9500c4" offset=".91961" />
            </linearGradient>
          </defs>
          <path
            d="m105 61.182-49.468 28.562v-0.0016l-23.571 13.609v84.338l49.47 28.562-1e-3 5.1e-4 23.57 13.607 56.084-32.379v-5.2e-4l16.957-9.7886v-84.34l-49.469-28.56 1e-3 -5.16e-4zm0 7.6383 10.341 5.9702-49.468 28.561v57.122l-10.341-5.9707v-57.12zm16.958 9.7896 49.468 28.56v11.941l-49.469-28.561-49.469 28.561v-11.941zm-1e-3 19.58 49.469 28.561v57.121l-10.341 5.9707v-57.121l-23.571-13.61v1e-3l-25.898-14.952zm-73.039 3.0096v57.123l49.468 28.561-10.341 5.9707-49.469-28.561v-57.123zm56.083 6.7794 32.513 18.771v37.542l-32.513 18.771-32.513-18.771v-37.543zm39.128 22.591 10.34 5.9697v57.123l-49.469 28.561-10.341-5.9707 49.47-28.563zm-6.6151 41.36v11.941l-49.469 28.561-49.469-28.561v-11.941l49.469 28.56 23.571-13.607-1e-3 -5.2e-4z"
            color="#000000"
            fill="url(#linearGradient37287)"
          />
        </svg>
      );
  }
};

export default SvgRepo;
