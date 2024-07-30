interface IPropsSideBar {
  name: string;
}
export const SpriteSideBar = ({ name }: IPropsSideBar) => {
  switch (name) {
    case 'dashboard':
      return (
        <svg
          width="14"
          height="14"
          fill="current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2.392 7.576h3.455c.316 0 .575-.26.575-.576V2.394a.577.577 0 0 0-.575-.576H2.392a.577.577 0 0 0-.576.576V7c0 .316.26.576.576.576Zm0 4.606h3.455c.316 0 .575-.26.575-.576V9.303a.577.577 0 0 0-.575-.576H2.392a.577.577 0 0 0-.576.576v2.303c0 .316.26.576.576.576Zm5.758 0h3.454c.317 0 .576-.26.576-.576V7a.577.577 0 0 0-.576-.576H8.15A.577.577 0 0 0 7.574 7v4.606c0 .316.26.576.576.576Zm-.576-9.788v2.303c0 .316.26.576.576.576h3.454c.317 0 .576-.26.576-.576V2.394a.577.577 0 0 0-.576-.576H8.15a.577.577 0 0 0-.576.576Z" />
        </svg>
      );
    case 'orders':
      return (
        <svg
          width="14"
          height="14"
          fill="current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#a)">
            <path d="M4.123 10.455a1.15 1.15 0 0 0-1.146 1.151 1.15 1.15 0 0 0 1.146 1.152c.633 0 1.151-.519 1.151-1.152 0-.633-.518-1.151-1.151-1.151ZM.668 1.818c0 .317.26.576.576.576h.575l2.073 4.37-.777 1.405c-.42.771.132 1.71 1.008 1.71h6.333c.317 0 .576-.26.576-.576a.577.577 0 0 0-.576-.576H4.123l.633-1.151h4.29c.431 0 .811-.236 1.007-.593l2.061-3.737a.573.573 0 0 0-.5-.852H3.091l-.386-.823a.572.572 0 0 0-.518-.329h-.944a.577.577 0 0 0-.576.576Zm9.212 8.637a1.15 1.15 0 0 0-1.146 1.151 1.15 1.15 0 0 0 1.146 1.152c.633 0 1.152-.519 1.152-1.152 0-.633-.519-1.151-1.152-1.151Z" />
          </g>
          <defs>
            <clipPath id="a">
              <path
                fill="#fff"
                transform="translate(.092 .09)"
                d="M0 0h13.818v13.818H0z"
              />
            </clipPath>
          </defs>
        </svg>
      );
    case 'products':
      return (
        <svg
          width="14"
          height="14"
          fill="current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.729 5.636V2.394h.576a.576.576 0 0 0 0-1.152H4.699a.576.576 0 0 0 0 1.152h.575v3.242l-3.009 4.422c-.78 1.147.041 2.7 1.428 2.7h6.617c1.388 0 2.209-1.553 1.428-2.7L8.729 5.637v-.001Z" />
        </svg>
      );
    case 'customers':
      return (
        <svg
          width="14"
          height="14"
          fill="current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#a)">
            <path d="M9.303 8.151H7.576V9.88H6.424V8.15H4.697V7h1.727V5.273h1.152V7h1.727m2.879-4.03h-1.526l.662-1.814-1.353-.49-.84 2.304H1.818V4.12L2.97 7.576 1.818 11.03v1.152h10.364V11.03L11.03 7.576l1.152-3.455V2.97Z" />
          </g>
          <defs>
            <clipPath id="a">
              <path
                fill="#fff"
                transform="translate(.092 .09)"
                d="M0 0h13.818v13.818H0z"
              />
            </clipPath>
          </defs>
        </svg>
      );
    case 'suppliers':
      return (
        <svg
          width="14"
          height="14"
          fill="current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.305 9.879v1.151h-8.06V9.88s0-2.303 4.03-2.303 4.03 2.303 4.03 2.303ZM7.29 4.409a2.015 2.015 0 1 0-4.03 0 2.015 2.015 0 0 0 4.03 0Zm1.98 3.167a3.063 3.063 0 0 1 1.186 2.303v1.151h2.303V9.88s0-2.09-3.489-2.303ZM8.73 2.394a1.952 1.952 0 0 0-1.111.34 2.879 2.879 0 0 1 0 3.35c.327.224.715.342 1.111.34a2.015 2.015 0 1 0 0-4.03Z" />
        </svg>
      );
    case 'close':
      return (
        <svg
          width="32"
          height="32"
          fill="current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 8 8 24M8 8l16 16"
            stroke="#1D1E21"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'logout':
      return (
        <svg
          width="16"
          height="16"
          fill="current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 1.333a2 2 0 0 0-2 2v9.334a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V3.333a2 2 0 0 0-2-2H4Zm6.862 3.529a.667.667 0 0 1 .943 0l2.666 2.667a.667.667 0 0 1 0 .942l-2.666 2.667a.667.667 0 0 1-.943-.943l1.529-1.528H6.667a.667.667 0 0 1 0-1.334h5.724l-1.529-1.528a.667.667 0 0 1 0-.943Z"
          />
        </svg>
      );

    default:
      return 'SVG not found';
  }
};
