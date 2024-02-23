import { ReactElement } from "react";

export default function PlayButtonSVG({width = 93, height = 93}:{
    width ?: number;
    height ?: number;
}): ReactElement {
  return (
    <svg
      width= {`${width}`}
      height= {`${height}`}
      viewBox="0 0 93 93"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1545_143)">
        <circle cx="46" cy="46" r="46" fill="#110C24" />
        <g filter="url(#filter1_d_1545_143)">
          <path
            d="M36.514 61.3332C36.0058 61.3322 35.5066 61.1981 35.0654 60.944C34.0721 60.3773 33.4546 59.2773 33.4546 58.0832V33.9166C33.4546 32.7191 34.0721 31.6225 35.0654 31.0558C35.5171 30.7945 36.0301 30.6601 36.551 30.6667C37.0718 30.6733 37.5814 30.8207 38.0263 31.0933L58.5425 43.4566C58.9701 43.7265 59.3226 44.1013 59.5669 44.5459C59.8113 44.9904 59.9394 45.4902 59.9394 45.9982C59.9394 46.5063 59.8113 47.0061 59.5669 47.4506C59.3226 47.8952 58.9701 48.27 58.5425 48.5399L38.023 60.9065C37.5677 61.1836 37.0461 61.3311 36.514 61.3332Z"
            fill="#F5C144"
          />
          <path
            d="M35.315 60.5107L35.3132 60.5097C34.4849 60.0372 33.9546 59.1085 33.9546 58.0832V33.9166C33.9546 32.8883 34.4847 31.9628 35.3132 31.4901L35.3132 31.4901L35.3158 31.4886C35.6896 31.2723 36.114 31.1612 36.5446 31.1667C36.9753 31.1721 37.3968 31.2939 37.7651 31.5196L37.7651 31.5197L37.7683 31.5216L58.2798 43.882C58.6337 44.1064 58.9258 44.4175 59.1288 44.7867C59.3325 45.1573 59.4394 45.5742 59.4394 45.9982C59.4394 46.4223 59.3325 46.8391 59.1287 47.2098C58.9258 47.579 58.6337 47.8901 58.2798 48.1145L37.7649 60.4783L37.7631 60.4794C37.3858 60.709 36.954 60.8312 36.5137 60.8332C36.0933 60.8322 35.6802 60.7211 35.315 60.5107Z"
            stroke="#FCF7FF"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_1545_143"
          x="0"
          y="0"
          width="93"
          height="93"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.992157 0 0 0 0 0.972549 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1545_143"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1545_143"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d_1545_143"
          x="33.4546"
          y="30.6665"
          width="27.4849"
          height="32.6665"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1545_143"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1545_143"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
