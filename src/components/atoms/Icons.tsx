import { HTMLAttributes } from 'react';

interface IconProps extends HTMLAttributes<SVGElement> {
  color?: string;
}

const Icons = {
  chevronDown: (props: IconProps) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M7.90629 11.3334C7.77494 11.3336 7.64849 11.2835 7.55296 11.1934L2.80629 6.44002C2.75717 6.39425 2.71777 6.33905 2.69044 6.27772C2.66311 6.21638 2.64842 6.15017 2.64723 6.08304C2.64605 6.0159 2.6584 5.94922 2.68355 5.88696C2.70869 5.8247 2.74612 5.76814 2.7936 5.72067C2.84108 5.67319 2.89764 5.63576 2.9599 5.61061C3.02216 5.58546 3.08884 5.57311 3.15598 5.5743C3.22311 5.57548 3.28932 5.59018 3.35065 5.6175C3.41199 5.64483 3.46719 5.68423 3.51296 5.73336L7.91296 10.1334L12.493 5.72669C12.5876 5.63466 12.7143 5.58316 12.8463 5.58316C12.9783 5.58316 13.105 5.63466 13.1996 5.72669C13.2933 5.82044 13.3459 5.94752 13.3459 6.08002C13.3459 6.21252 13.2933 6.33961 13.1996 6.43336L8.26629 11.1867C8.21983 11.2349 8.16381 11.2728 8.10181 11.2981C8.03981 11.3234 7.97321 11.3354 7.90629 11.3334Z"
        fill="white"
      />
    </svg>
  ),
  code: (props: IconProps) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M4.45575 17.1767C4.6234 17.3386 4.84794 17.4282 5.081 17.4262C5.31407 17.4242 5.53702 17.3307 5.70183 17.1659C5.86664 17.0011 5.96013 16.7781 5.96215 16.5451C5.96418 16.312 5.87458 16.0875 5.71266 15.9198L1.89669 12.1037L5.71266 8.28769C5.87458 8.12004 5.96418 7.8955 5.96215 7.66243C5.96013 7.42936 5.86664 7.20641 5.70183 7.0416C5.53702 6.87679 5.31407 6.78331 5.081 6.78128C4.84794 6.77926 4.6234 6.86885 4.45575 7.03078L0.0112346 11.4753C-0.155409 11.642 -0.249023 11.868 -0.249023 12.1037C-0.249023 12.3394 -0.155409 12.5655 0.0112346 12.7322L4.45575 17.1767Z"
        fill="#7388A9"
      />
      <path
        d="M17.7893 17.1767C17.956 17.3434 18.1821 17.437 18.4178 17.437C18.6535 17.437 18.8795 17.3434 19.0462 17.1767L23.4907 12.7322C23.6574 12.5655 23.751 12.3395 23.751 12.1037C23.751 11.868 23.6574 11.642 23.4907 11.4753L19.0462 7.03078C18.8786 6.86885 18.654 6.77926 18.421 6.78128C18.1879 6.78331 17.9649 6.87679 17.8001 7.0416C17.6353 7.20641 17.5418 7.42936 17.5398 7.66243C17.5378 7.8955 17.6274 8.12004 17.7893 8.28769L21.6053 12.1037L17.7893 15.9198C17.6227 16.0865 17.5291 16.3126 17.5291 16.5483C17.5291 16.784 17.6227 17.01 17.7893 17.1767Z"
        fill="#7388A9"
      />
      <path
        d="M8.73406 19.1432C8.84138 19.1892 8.95671 19.2137 9.07347 19.2151C9.19024 19.2166 9.30614 19.195 9.41456 19.1516C9.52298 19.1082 9.62179 19.0439 9.70535 18.9623C9.78891 18.8808 9.85557 18.7835 9.90154 18.6762L15.235 6.23155C15.3278 6.0148 15.3308 5.77003 15.2432 5.55109C15.1557 5.33214 14.9847 5.15696 14.7679 5.06407C14.5512 4.97118 14.3064 4.9682 14.0875 5.05579C13.8685 5.14337 13.6933 5.31435 13.6004 5.5311L8.26703 17.9757C8.221 18.0831 8.19657 18.1984 8.19514 18.3152C8.1937 18.4319 8.21528 18.5478 8.25866 18.6562C8.30203 18.7647 8.36633 18.8635 8.4479 18.947C8.52948 19.0306 8.62671 19.0973 8.73406 19.1432Z"
        fill="#7388A9"
      />
    </svg>
  ),
  user: (props: IconProps) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M11.9142 12.0336C13.0384 12.0336 13.9751 11.6609 14.8182 10.9154C15.7549 10.1697 16.2233 8.95812 16.2233 7.74654C16.2233 6.81455 15.9423 5.88257 15.3803 5.23018C14.6308 4.1118 13.413 3.36621 11.9142 3.36621C9.57231 3.36621 7.6051 5.32338 7.6051 7.65334C7.6051 10.0765 9.57231 12.0336 11.9142 12.0336Z"
        fill="#7A8FAD"
      />
      <path
        d="M14.3965 14.271C14.1155 14.271 13.9281 14.1777 13.6471 14.1777H10.0874C7.37079 14.1777 5.12256 16.4146 5.12256 19.1173C5.12256 19.7697 5.40359 20.2357 5.87197 20.6085C6.62138 21.0745 8.40123 21.6335 11.8673 21.6335C15.3333 21.6335 17.0194 21.0745 17.8625 20.6085C17.8625 20.6085 17.9562 20.5153 18.0499 20.5153C18.4246 20.2357 18.7056 19.7697 18.7056 19.1173C18.6119 16.6942 16.8321 14.6438 14.3965 14.271Z"
        fill="#7A8FAD"
      />
    </svg>
  ),
  kor: (props: IconProps) => (
    <svg width="23" height="9" viewBox="0 0 23 9" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M0.813539 8.08929C0.582885 8.08929 0.404315 8.02604 0.277827 7.89955C0.15878 7.76563 0.0992567 7.58334 0.0992567 7.35268V0.767889C0.0992567 0.529794 0.15878 0.351224 0.277827 0.232176C0.404315 0.105689 0.582885 0.0424448 0.813539 0.0424448C1.04419 0.0424448 1.21904 0.105689 1.33809 0.232176C1.46458 0.351224 1.52782 0.529794 1.52782 0.767889V3.61386H1.55014L4.75325 0.399586C4.8723 0.280539 4.99135 0.191254 5.1104 0.13173C5.22944 0.0722067 5.36337 0.0424448 5.51218 0.0424448C5.72795 0.0424448 5.88048 0.0982483 5.96977 0.209855C6.06649 0.321462 6.1037 0.45167 6.08137 0.600478C6.06649 0.749287 5.99581 0.886936 5.86932 1.01342L2.61041 4.23886L2.62157 3.59154L6.02557 7.05134C6.18182 7.20015 6.26366 7.3564 6.27111 7.52009C6.27855 7.68378 6.22646 7.82143 6.11486 7.93304C6.01069 8.0372 5.85444 8.08929 5.64611 8.08929C5.46754 8.08929 5.32245 8.05208 5.21084 7.97768C5.10668 7.90327 4.98391 7.79539 4.84254 7.65402L1.55014 4.36162H1.52782V7.35268C1.52782 7.58334 1.4683 7.76563 1.34925 7.89955C1.2302 8.02604 1.05163 8.08929 0.813539 8.08929ZM10.7322 8.11161C9.97331 8.11161 9.30739 7.9442 8.73447 7.60938C8.169 7.27456 7.73001 6.80581 7.41751 6.20313C7.10502 5.59302 6.94877 4.87873 6.94877 4.06028C6.94877 3.44273 7.03805 2.88841 7.21662 2.39735C7.39519 1.89884 7.64817 1.47473 7.97555 1.12503C8.31037 0.767888 8.70843 0.496312 9.16974 0.310301C9.63849 0.11685 10.1593 0.0201238 10.7322 0.0201238C11.4986 0.0201238 12.1645 0.187534 12.73 0.522354C13.2955 0.849733 13.7345 1.31476 14.047 1.91744C14.3594 2.52011 14.5157 3.23068 14.5157 4.04912C14.5157 4.66668 14.4264 5.22471 14.2478 5.72322C14.0693 6.22173 13.8126 6.64956 13.4778 7.0067C13.1504 7.36384 12.7523 7.63914 12.2836 7.83259C11.8223 8.0186 11.3051 8.11161 10.7322 8.11161ZM10.7322 6.88393C11.2159 6.88393 11.6251 6.77233 11.9599 6.54911C12.3022 6.3259 12.5626 6.00224 12.7412 5.57814C12.9272 5.15403 13.0202 4.64808 13.0202 4.06028C13.0202 3.16743 12.8193 2.47547 12.4175 1.9844C12.0231 1.49333 11.4614 1.2478 10.7322 1.2478C10.256 1.2478 9.84682 1.3594 9.50456 1.58262C9.1623 1.79839 8.89816 2.11833 8.71215 2.54243C8.53358 2.9591 8.4443 3.46505 8.4443 4.06028C8.4443 4.9457 8.64519 5.63766 9.04697 6.13617C9.44876 6.63468 10.0105 6.88393 10.7322 6.88393ZM16.6826 8.08929C16.452 8.08929 16.2734 8.02604 16.1469 7.89955C16.0279 7.76563 15.9683 7.58334 15.9683 7.35268V0.857174C15.9683 0.619079 16.0316 0.440509 16.1581 0.321462C16.2845 0.194974 16.4631 0.13173 16.6938 0.13173H19.3835C20.2466 0.13173 20.9125 0.340063 21.3812 0.756728C21.85 1.16595 22.0844 1.74259 22.0844 2.48663C22.0844 2.97026 21.9765 3.38692 21.7607 3.73663C21.5524 4.08633 21.2473 4.35418 20.8455 4.54019C20.4438 4.7262 19.9564 4.81921 19.3835 4.81921L19.4839 4.6518H19.8522C20.1573 4.6518 20.4214 4.7262 20.6446 4.87501C20.8753 5.02382 21.0762 5.2582 21.2473 5.57814L22.0844 7.12947C22.1737 7.28572 22.2146 7.43825 22.2071 7.58706C22.1997 7.73586 22.1439 7.85863 22.0397 7.95536C21.9356 8.04464 21.783 8.08929 21.5821 8.08929C21.3812 8.08929 21.2176 8.04836 21.0911 7.96652C20.9646 7.87723 20.853 7.7433 20.7563 7.56473L19.629 5.48885C19.4951 5.23588 19.3351 5.06847 19.1491 4.98662C18.9705 4.89733 18.7399 4.85269 18.4572 4.85269H17.3969V7.35268C17.3969 7.58334 17.3374 7.76563 17.2183 7.89955C17.0993 8.02604 16.9207 8.08929 16.6826 8.08929ZM17.3969 3.79243H19.138C19.6513 3.79243 20.0382 3.68826 20.2987 3.47993C20.5665 3.26416 20.7004 2.94422 20.7004 2.52011C20.7004 2.10345 20.5665 1.79095 20.2987 1.58262C20.0382 1.36684 19.6513 1.25896 19.138 1.25896H17.3969V3.79243Z"
        fill="#7A8FAD"
      />
    </svg>
  ),
  setting: (props: IconProps) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M21.0836 9.24894C20.6824 9.19298 20.2994 9.05084 19.9633 8.83309C19.6272 8.61535 19.3466 8.32761 19.1424 7.99131C18.9382 7.65501 18.8156 7.27882 18.7839 6.89073C18.7521 6.50265 18.8119 6.11268 18.9588 5.74987C19.0522 5.51267 19.066 5.25336 18.9982 5.00828C18.9303 4.7632 18.7843 4.54464 18.5806 4.38325C17.6812 3.65813 16.6575 3.08849 15.5551 2.69974C15.304 2.6102 15.0299 2.59901 14.7719 2.66777C14.5139 2.73652 14.285 2.88171 14.1179 3.08265C13.8664 3.3914 13.545 3.64111 13.1781 3.81284C12.8111 3.98458 12.4082 4.07383 12 4.07383C11.5918 4.07383 11.1889 3.98458 10.822 3.81284C10.455 3.64111 10.1336 3.3914 9.88211 3.08265C9.71503 2.88171 9.48616 2.73652 9.22811 2.66777C8.97007 2.59901 8.696 2.6102 8.44496 2.69974C7.42704 3.05865 6.47531 3.57125 5.62568 4.2182C5.41151 4.38098 5.25725 4.60532 5.18549 4.85836C5.11372 5.11141 5.12822 5.37987 5.22685 5.62443C5.38553 5.99684 5.45109 6.39978 5.41827 6.80091C5.38546 7.20204 5.25518 7.59021 5.03789 7.93427C4.82061 8.27833 4.52236 8.56871 4.16707 8.78211C3.81179 8.99552 3.40936 9.12601 2.99206 9.16311C2.72114 9.19092 2.46668 9.30151 2.26614 9.4786C2.0656 9.65569 1.92957 9.88993 1.8781 10.1468C1.75006 10.7553 1.68556 11.3746 1.68556 11.9954C1.68462 12.5151 1.72832 13.034 1.81621 13.5469C1.85995 13.812 1.99345 14.0559 2.19604 14.2408C2.39864 14.4258 2.65907 14.5415 2.93705 14.5702C3.36351 14.6086 3.77419 14.7445 4.1347 14.9666C4.49521 15.1887 4.79506 15.4905 5.00917 15.8467C5.22328 16.2028 5.34541 16.6031 5.36534 17.0139C5.38526 17.4247 5.30241 17.8341 5.12371 18.2079C5.00676 18.451 4.97775 18.7246 5.04129 18.9854C5.10483 19.2461 5.25726 19.479 5.4744 19.6471C6.3684 20.3591 7.38228 20.9195 8.47247 21.3042C8.61188 21.3506 8.75815 21.3751 8.90567 21.3768C9.10795 21.3764 9.30718 21.3294 9.48665 21.2398C9.66611 21.1502 9.82059 21.0206 9.93712 20.8619C10.1822 20.5191 10.5107 20.2388 10.8942 20.0455C11.2776 19.8523 11.7044 19.7518 12.1375 19.7527C12.5572 19.7533 12.9709 19.8478 13.3457 20.0289C13.7206 20.21 14.0462 20.4726 14.2967 20.7959C14.4633 21.0109 14.6993 21.167 14.968 21.2398C15.2366 21.3127 15.5228 21.2982 15.782 21.1986C16.7788 20.8134 17.7069 20.281 18.5325 19.6207C18.7399 19.4561 18.8876 19.2325 18.9543 18.9822C19.021 18.7319 19.0033 18.4677 18.9038 18.2277C18.7421 17.8601 18.6716 17.4614 18.6978 17.0631C18.7241 16.6649 18.8464 16.2779 19.0551 15.9328C19.2638 15.5877 19.5533 15.2939 19.9005 15.0746C20.2478 14.8553 20.6434 14.7165 21.0561 14.6692C21.3237 14.6337 21.5726 14.5173 21.7667 14.3368C21.9608 14.1564 22.09 13.9213 22.1357 13.6657C22.2461 13.115 22.3059 12.5561 22.3145 11.9954C22.3146 11.4039 22.257 10.8138 22.1425 10.2326C22.0961 9.98262 21.9688 9.75301 21.7787 9.57642C21.5886 9.39983 21.3454 9.28524 21.0836 9.24894ZM15.4382 11.9954C15.4382 12.6483 15.2365 13.2865 14.8587 13.8293C14.4809 14.3722 13.944 14.7953 13.3157 15.0451C12.6875 15.295 11.9962 15.3603 11.3293 15.233C10.6623 15.1056 10.0497 14.7912 9.56887 14.3295C9.08804 13.8679 8.76058 13.2797 8.62792 12.6394C8.49526 11.999 8.56335 11.3353 8.82357 10.7321C9.0838 10.129 9.52447 9.61341 10.0899 9.25069C10.6553 8.88797 11.32 8.69437 12 8.69437C12.9119 8.69437 13.7864 9.04215 14.4311 9.66121C15.0759 10.2803 15.4382 11.1199 15.4382 11.9954Z"
        fill="#7A8FAD"
      />
    </svg>
  ),
  arrowRightSquare: (props: IconProps) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.59675 2.91675C4.36091 2.91675 2.91675 4.27925 2.91675 6.38758V13.6117C2.91675 15.7201 4.36091 17.0834 6.59675 17.0834H13.4034C15.6392 17.0834 17.0834 15.7201 17.0834 13.6117V6.38758C17.0834 4.27925 15.6392 2.91675 13.4034 2.91675H6.59675ZM13.4034 18.3334H6.59675C3.64841 18.3334 1.66675 16.4359 1.66675 13.6117V6.38758C1.66675 3.56341 3.64841 1.66675 6.59675 1.66675H13.4034C16.3517 1.66675 18.3334 3.56341 18.3334 6.38758V13.6117C18.3334 16.4359 16.3517 18.3334 13.4034 18.3334Z"
        fill="#5E626F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.405 10.625H6.59497C6.24997 10.625 5.96997 10.345 5.96997 10C5.96997 9.655 6.24997 9.375 6.59497 9.375H13.405C13.75 9.375 14.03 9.655 14.03 10C14.03 10.345 13.75 10.625 13.405 10.625Z"
        fill="#5E626F"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.2688 13.7484C10.1088 13.7484 9.94793 13.6876 9.82627 13.5642C9.58293 13.3192 9.58377 12.9242 9.82793 12.6809L12.5196 10.0001L9.82793 7.31925C9.58377 7.07591 9.58293 6.68091 9.82627 6.43591C10.0696 6.19091 10.4646 6.19091 10.7096 6.43425L13.8463 9.55758C13.9646 9.67425 14.0304 9.83425 14.0304 10.0001C14.0304 10.1659 13.9646 10.3259 13.8463 10.4426L10.7096 13.5659C10.5879 13.6876 10.4279 13.7484 10.2688 13.7484Z"
        fill="#5E626F"
      />
    </svg>
  ),
  check: (props: IconProps) => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M11.6666 3.5L5.24992 9.91667L2.33325 7"
        stroke="#2C599B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  marketing: (props: IconProps) => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M27 4.11621H5C3.3457 4.11621 2 5.46191 2 7.11621V23.1162C2 24.7705 3.3457 26.1162 5 26.1162H9V26.8838C9 27.436 9.44775 27.8838 10 27.8838H22C22.5522 27.8838 23 27.436 23 26.8838V26.1162H27C28.6543 26.1162 30 24.7705 30 23.1162V7.11621C30 5.46191 28.6543 4.11621 27 4.11621ZM28 23.1162C28 23.6675 27.5513 24.1162 27 24.1162H23V23.3481C23 22.7959 22.5522 22.3481 22 22.3481H10C9.44775 22.3481 9 22.7959 9 23.3481V24.1162H5C4.44873 24.1162 4 23.6675 4 23.1162V7.11621C4 6.56494 4.44873 6.11621 5 6.11621H27C27.5513 6.11621 28 6.56494 28 7.11621V23.1162ZM11 25.8838V24.3481H21V25.8838H11Z"
        fill="white"
      />
      <path
        d="M15.3794 7.29248C14.8271 7.29248 14.3794 7.74023 14.3794 8.29248V8.62006C11.3364 9.10236 9 11.7365 9 14.9131C9 18.4307 11.8618 21.2925 15.3794 21.2925C18.556 21.2925 21.1901 18.9561 21.6724 15.9131H22C22.5522 15.9131 23 15.4653 23 14.9131C23 10.7109 19.5815 7.29248 15.3794 7.29248ZM15.3794 19.2925C12.9644 19.2925 11 17.3281 11 14.9131C11 12.8434 12.4468 11.1147 14.3794 10.6597V14.9131C14.3794 15.4653 14.8271 15.9131 15.3794 15.9131H19.6328C19.1778 17.8457 17.449 19.2925 15.3794 19.2925ZM16.3794 13.9131V9.38135C18.6787 9.79639 20.4961 11.6138 20.9111 13.9131H16.3794Z"
        fill="white"
      />
    </svg>
  ),
  image: (props: IconProps) => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M25 2H7C4.24316 2 2 4.24316 2 7V25C2 27.7568 4.24316 30 7 30H25C27.7568 30 30 27.7568 30 25V7C30 4.24316 27.7568 2 25 2ZM25 28H7C5.3457 28 4 26.6543 4 25V17.5H10.7988C12.5283 17.5 14.1396 18.2744 15.2188 19.625C16.6807 21.4521 18.8613 22.5 21.2012 22.5H28V25C28 26.6543 26.6543 28 25 28ZM7 4H25C26.6543 4 28 5.3457 28 7V20.5H21.2012C19.4717 20.5 17.8604 19.7256 16.7812 18.375C15.3193 16.5479 13.1387 15.5 10.7988 15.5H4V7C4 5.3457 5.3457 4 7 4Z"
        fill="white"
      />
      <path
        d="M22 14C24.2061 14 26 12.2061 26 10C26 7.79395 24.2061 6 22 6C19.7939 6 18 7.79395 18 10C18 12.2061 19.7939 14 22 14ZM22 8C23.1025 8 24 8.89746 24 10C24 11.1025 23.1025 12 22 12C20.8975 12 20 11.1025 20 10C20 8.89746 20.8975 8 22 8Z"
        fill="white"
      />
    </svg>
  ),
  box: (props: IconProps) => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M16.0006 32.132C15.7859 32.132 15.5725 32.0768 15.3801 31.9657L2.48383 24.5202C2.09977 24.2987 1.86337 23.8885 1.86337 23.4455V8.55447C1.86337 8.11146 2.09977 7.70133 2.48383 7.47983L15.3801 0.0342926C15.7642 -0.187212 16.237 -0.187212 16.621 0.0342926L29.5161 7.47983C29.9002 7.70133 30.1366 8.11146 30.1366 8.55447V23.4455C30.1366 23.8885 29.9002 24.2987 29.5161 24.5202L16.621 31.9657C16.4287 32.0768 16.2153 32.132 16.0006 32.132ZM4.34522 22.7289L16.0006 29.4578L27.6547 22.7289V9.2711L16.0006 2.5422L4.34522 9.2711V22.7289Z"
        fill="white"
      />
      <path
        d="M16.0006 32.132C15.3156 32.132 14.7597 31.576 14.7597 30.891V16C14.7597 15.315 15.3156 14.759 16.0006 14.759C16.6856 14.759 17.2416 15.315 17.2416 16V30.891C17.2416 31.576 16.6856 32.132 16.0006 32.132Z"
        fill="white"
      />
      <path
        d="M15.9994 17.2408C15.7891 17.2408 15.5756 17.1875 15.3802 17.0739L2.48391 9.6284C1.89013 9.28653 1.68724 8.5277 2.02911 7.93392C2.37223 7.34014 3.12857 7.136 3.72421 7.47974L16.6205 14.9253C17.2143 15.2678 17.4172 16.0266 17.0747 16.6204C16.8451 17.0187 16.4282 17.2408 15.9994 17.2408Z"
        fill="white"
      />
      <path
        d="M16.0019 17.2408C15.5731 17.2408 15.1562 17.0181 14.926 16.6204C14.5835 16.0266 14.7864 15.2678 15.3802 14.9253L28.2752 7.47974C28.8684 7.136 29.6272 7.34014 29.9703 7.93392C30.3128 8.5277 30.1099 9.28652 29.5161 9.62902L16.6211 17.0746C16.4263 17.1875 16.2122 17.2408 16.0019 17.2408Z"
        fill="white"
      />
    </svg>
  ),
  target: (props: IconProps) => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M28.9639 15H27.7036C27.4778 12.34 26.3549 9.7428 24.3242 7.71191C22.2941 5.68182 19.6985 4.55859 17.04 4.33197V3C17.04 2.44775 16.5923 2 16.04 2C15.4878 2 15.04 2.44775 15.04 3V4.3316C12.379 4.5567 9.78052 5.67993 7.74854 7.71191C5.71747 9.7428 4.5943 12.34 4.36847 15H3.03613C2.48389 15 2.03613 15.4478 2.03613 16C2.03613 16.5522 2.48389 17 3.03613 17H4.36847C4.5943 19.66 5.71747 22.2572 7.74854 24.2881C9.78058 26.3201 12.379 27.4433 15.04 27.6683V29C15.04 29.5522 15.4878 30 16.04 30C16.5923 30 17.04 29.5522 17.04 29V27.668C19.6988 27.4413 22.2941 26.3182 24.3242 24.2881C26.3549 22.2572 27.4778 19.66 27.7036 17H28.9639C29.5166 17 29.9639 16.5522 29.9639 16C29.9639 15.4478 29.5166 15 28.9639 15ZM22.9102 22.874C21.27 24.5138 19.1848 25.4409 17.04 25.6618V24.4424C17.04 23.8901 16.5923 23.4424 16.04 23.4424C15.4878 23.4424 15.04 23.8901 15.04 24.4424V25.663C12.8926 25.4436 10.8044 24.5159 9.1626 22.874C7.52179 21.233 6.59436 19.1462 6.37427 17H7.59424C8.14648 17 8.59424 16.5522 8.59424 16C8.59424 15.4478 8.14648 15 7.59424 15H6.37427C6.59436 12.8538 7.52179 10.767 9.1626 9.12598C10.8047 7.48425 12.8925 6.5564 15.04 6.33685V7.55762C15.04 8.10986 15.4878 8.55762 16.04 8.55762C16.5923 8.55762 17.04 8.10986 17.04 7.55762V6.33789C19.1848 6.55872 21.2707 7.48608 22.9102 9.12598C24.551 10.767 25.4784 12.8538 25.6985 15H24.4062C23.8535 15 23.4062 15.4478 23.4062 16C23.4062 16.5522 23.8535 17 24.4062 17H25.6985C25.4784 19.1462 24.551 21.233 22.9102 22.874Z"
        fill="white"
      />
      <path
        d="M21.207 12.9492L18.6572 12.5625L17.5088 10.1309C17.2275 9.53516 16.6494 9.16504 16 9.16504C15.3506 9.16504 14.7729 9.53516 14.4917 10.1304L13.3433 12.5625L10.793 12.9492C10.1704 13.0439 9.65771 13.4795 9.45556 14.0864C9.24902 14.7061 9.40234 15.3774 9.85644 15.8398L11.727 17.7456L11.2837 20.4473C11.1763 21.104 11.4429 21.748 11.9805 22.1279C12.2671 22.3306 12.5996 22.4336 12.9336 22.4336C13.2056 22.4336 13.479 22.3652 13.7295 22.2275L16 20.9805L18.2705 22.2275C18.8301 22.5352 19.499 22.4966 20.0185 22.1284C20.5566 21.749 20.8232 21.105 20.7158 20.4468L20.2725 17.7451L22.1426 15.8403C22.5967 15.3784 22.751 14.7065 22.5449 14.0869C22.3428 13.48 21.8301 13.0439 21.207 12.9492ZM18.2773 17.9336L18.6406 20.1489L16.7954 19.1353C16.2974 18.8618 15.7026 18.8618 15.2046 19.1353L13.3594 20.1489L13.7231 17.9336C13.812 17.3921 13.6377 16.8364 13.2559 16.4478L11.6758 14.8384L13.8213 14.5127C14.3696 14.4287 14.8403 14.0747 15.081 13.5664L16 11.6201L16.9199 13.5684C17.1611 14.0757 17.6309 14.4287 18.1797 14.5132L20.3232 14.8384L18.7422 16.4487C18.3633 16.8364 18.1885 17.3911 18.2773 17.9336Z"
        fill="white"
      />
    </svg>
  ),
  call: (props: IconProps) => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M21.1689 19.9854C19.9326 19.5898 18.5811 20.2119 18.084 21.3965C18.0547 21.4648 18.0273 21.5342 18.001 21.6035C16.4346 20.9277 15.0098 19.9854 13.7568 18.7949C13.7549 18.7939 13.7539 18.792 13.752 18.791C13.5654 18.6152 13.3848 18.4346 13.209 18.248C13.208 18.2461 13.2061 18.2451 13.2051 18.2432C12.0146 16.9902 11.0723 15.5654 10.3965 13.999C10.4658 13.9727 10.5352 13.9453 10.6045 13.916C11.7891 13.418 12.4092 12.0635 12.0146 10.8301C9.18359 2 9.10938 2 8.19922 2C4.78125 2 2 4.78125 2 8.19922C2 20.2197 11.7803 30 23.8008 30C27.2188 30 30 27.2188 30 23.8008C30 22.8906 30 22.8164 21.1689 19.9854ZM23.8008 28C12.8828 28 4 19.1172 4 8.19922C4 6.08496 5.57129 4.33008 7.60645 4.04199C7.97266 4.96875 8.76758 7.25391 10.1104 11.4404C10.1914 11.6943 10.0684 11.9717 9.83008 12.0723C9.53027 12.1973 9.21777 12.2881 8.89941 12.3408C8.6084 12.3887 8.35352 12.5625 8.20312 12.8164C8.05176 13.0693 8.02148 13.377 8.11816 13.6553C8.89453 15.8906 10.1182 17.8975 11.7549 19.6201C11.957 19.835 12.165 20.043 12.3799 20.2451C14.1025 21.8818 16.1094 23.1055 18.3447 23.8818C18.623 23.9795 18.9307 23.9473 19.1836 23.7969C19.4375 23.6465 19.6113 23.3916 19.6592 23.1006C19.7119 22.7822 19.8027 22.4697 19.9277 22.1709C20.0283 21.9316 20.3047 21.8105 20.5586 21.8896C24.7451 23.2324 27.0312 24.0273 27.958 24.3936C27.6699 26.4287 25.915 28 23.8008 28Z"
        fill="white"
      />
      <path
        d="M17.7354 7C21.7412 7 25 10.2588 25 14.2646C25 14.8174 25.4473 15.2646 26 15.2646C26.5527 15.2646 27 14.8174 27 14.2646C27 9.15625 22.8438 5 17.7354 5C17.1826 5 16.7354 5.44727 16.7354 6C16.7354 6.55273 17.1826 7 17.7354 7Z"
        fill="white"
      />
      <path
        d="M16 11.4902C18.4863 11.4902 20.5098 13.5137 20.5098 16C20.5098 16.5527 20.957 17 21.5098 17C22.0625 17 22.5098 16.5527 22.5098 16C22.5098 12.4102 19.5898 9.49023 16 9.49023C15.4473 9.49023 15 9.9375 15 10.4902C15 11.043 15.4473 11.4902 16 11.4902Z"
        fill="white"
      />
    </svg>
  ),
  presentation: (props: IconProps) => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M21.1689 19.9854C19.9326 19.5898 18.5811 20.2119 18.084 21.3965C18.0547 21.4648 18.0273 21.5342 18.001 21.6035C16.4346 20.9277 15.0098 19.9854 13.7568 18.7949C13.7549 18.7939 13.7539 18.792 13.752 18.791C13.5654 18.6152 13.3848 18.4346 13.209 18.248C13.208 18.2461 13.2061 18.2451 13.2051 18.2432C12.0146 16.9902 11.0723 15.5654 10.3965 13.999C10.4658 13.9727 10.5352 13.9453 10.6045 13.916C11.7891 13.418 12.4092 12.0635 12.0146 10.8301C9.18359 2 9.10938 2 8.19922 2C4.78125 2 2 4.78125 2 8.19922C2 20.2197 11.7803 30 23.8008 30C27.2188 30 30 27.2188 30 23.8008C30 22.8906 30 22.8164 21.1689 19.9854ZM23.8008 28C12.8828 28 4 19.1172 4 8.19922C4 6.08496 5.57129 4.33008 7.60645 4.04199C7.97266 4.96875 8.76758 7.25391 10.1104 11.4404C10.1914 11.6943 10.0684 11.9717 9.83008 12.0723C9.53027 12.1973 9.21777 12.2881 8.89941 12.3408C8.6084 12.3887 8.35352 12.5625 8.20312 12.8164C8.05176 13.0693 8.02148 13.377 8.11816 13.6553C8.89453 15.8906 10.1182 17.8975 11.7549 19.6201C11.957 19.835 12.165 20.043 12.3799 20.2451C14.1025 21.8818 16.1094 23.1055 18.3447 23.8818C18.623 23.9795 18.9307 23.9473 19.1836 23.7969C19.4375 23.6465 19.6113 23.3916 19.6592 23.1006C19.7119 22.7822 19.8027 22.4697 19.9277 22.1709C20.0283 21.9316 20.3047 21.8105 20.5586 21.8896C24.7451 23.2324 27.0312 24.0273 27.958 24.3936C27.6699 26.4287 25.915 28 23.8008 28Z"
        fill="white"
      />
      <path
        d="M17.7354 7C21.7412 7 25 10.2588 25 14.2646C25 14.8174 25.4473 15.2646 26 15.2646C26.5527 15.2646 27 14.8174 27 14.2646C27 9.15625 22.8438 5 17.7354 5C17.1826 5 16.7354 5.44727 16.7354 6C16.7354 6.55273 17.1826 7 17.7354 7Z"
        fill="white"
      />
      <path
        d="M16 11.4902C18.4863 11.4902 20.5098 13.5137 20.5098 16C20.5098 16.5527 20.957 17 21.5098 17C22.0625 17 22.5098 16.5527 22.5098 16C22.5098 12.4102 19.5898 9.49023 16 9.49023C15.4473 9.49023 15 9.9375 15 10.4902C15 11.043 15.4473 11.4902 16 11.4902Z"
        fill="white"
      />
    </svg>
  ),
  dollarSign: (props: IconProps) => (
    <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M10.1833 6.60332C9.59841 6.60332 9.14159 6.13165 8.82972 5.63687C8.78467 5.56539 8.73515 5.49643 8.68116 5.42998C8.42042 5.10063 8.06705 4.85361 7.62105 4.68893C7.17505 4.52426 6.66729 4.44192 6.09778 4.44192C5.50082 4.44192 4.97591 4.53455 4.52304 4.71981C4.07018 4.90507 3.72024 5.16581 3.47322 5.50203C3.22621 5.83139 3.1027 6.20877 3.1027 6.63419C3.1027 7.26546 3.36001 7.75263 3.87463 8.09571C4.39611 8.43193 5.04452 8.69267 5.81988 8.87793L7.25052 9.25875C8.49247 9.56752 9.51828 10.041 10.3279 10.6791C11.1445 11.3172 11.5527 12.247 11.5527 13.4683C11.5527 14.3123 11.3332 15.0671 10.894 15.7326C10.4617 16.3914 9.82705 16.906 8.98993 17.2765C8.15968 17.647 7.17162 17.8323 6.02573 17.8323C4.91416 17.8323 3.9501 17.6539 3.13357 17.2971C2.32391 16.9403 1.68578 16.436 1.21919 15.7841C0.976398 15.4398 0.790061 15.0611 0.660183 14.648C0.463166 14.0212 1.00211 13.458 1.65908 13.458C2.25347 13.458 2.71338 13.9427 3.00728 14.4593C3.07045 14.5704 3.14343 14.6757 3.22621 14.7755C3.52812 15.1323 3.91923 15.3999 4.39954 15.5783C4.88671 15.7567 5.42534 15.8424 6.01544 15.8356C6.6467 15.8356 7.21278 15.7361 7.71368 15.5371C8.21458 15.3381 8.60569 15.0568 8.88701 14.6931C9.16833 14.3295 9.309 13.9075 9.309 13.4272C9.309 13.0155 9.19235 12.6655 8.95906 12.3773C8.72576 12.0891 8.4067 11.8559 8.00187 11.6775C7.59703 11.4991 7.09614 11.3309 6.49918 11.1731L4.72889 10.71C3.48008 10.3669 2.51946 9.87629 1.84703 9.23816C1.18145 8.59317 0.852099 7.76635 0.85896 6.7577C0.85896 5.91373 1.08539 5.16581 1.53826 4.51396C1.99798 3.86211 2.62925 3.36122 3.43205 3.01128C4.24172 2.65448 5.14745 2.47607 6.14924 2.47607C7.14417 2.47607 8.03274 2.65448 8.81496 3.01128C9.60405 3.36122 10.2182 3.85182 10.6573 4.48309C10.8757 4.78891 11.0423 5.11449 11.1571 5.45983C11.3587 6.06655 10.8226 6.60332 10.1833 6.60332Z"
        fill="#00C696"
      />
      <path d="M6.19043 1.5L6.19043 3.3291" stroke="#00C696" strokeWidth="2" strokeLinecap="round" />
      <path d="M6.19043 16.918L6.19043 18.7471" stroke="#00C696" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  chevronLeft: (props: IconProps) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M15.0707 19.9998C15.2687 19.9955 15.4579 19.917 15.6007 19.7798C15.7412 19.6392 15.8201 19.4486 15.8201 19.2498C15.8201 19.0511 15.7412 18.8604 15.6007 18.7198L9.00074 12.1198L15.6107 5.25981C15.7512 5.11918 15.8301 4.92856 15.8301 4.72981C15.8301 4.53106 15.7512 4.34043 15.6107 4.19981C15.4701 4.05936 15.2795 3.98047 15.0807 3.98047C14.882 3.98047 14.6914 4.05936 14.5507 4.19981L7.43074 11.5998C7.3615 11.6686 7.30655 11.7504 7.26905 11.8405C7.23155 11.9306 7.21225 12.0272 7.21225 12.1248C7.21225 12.2224 7.23155 12.319 7.26905 12.4091C7.30655 12.4992 7.3615 12.581 7.43074 12.6498L14.5407 19.7898C14.684 19.925 14.8737 20.0002 15.0707 19.9998Z"
        fill="white"
      />
    </svg>
  ),
  chevronRight: (props: IconProps) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M8.92926 19.9998C8.73126 19.9955 8.54211 19.917 8.39926 19.7798C8.25881 19.6392 8.17992 19.4486 8.17992 19.2498C8.17992 19.0511 8.25881 18.8604 8.39926 18.7198L14.9993 12.1198L8.38926 5.25981C8.24881 5.11918 8.16992 4.92856 8.16992 4.72981C8.16992 4.53106 8.24881 4.34043 8.38926 4.19981C8.52989 4.05936 8.72051 3.98047 8.91926 3.98047C9.11801 3.98047 9.30864 4.05936 9.44926 4.19981L16.5693 11.5998C16.6385 11.6686 16.6934 11.7504 16.7309 11.8405C16.7684 11.9306 16.7878 12.0272 16.7878 12.1248C16.7878 12.2224 16.7684 12.319 16.7309 12.4091C16.6934 12.4992 16.6385 12.581 16.5693 12.6498L9.45926 19.7898C9.31597 19.925 9.12629 20.0002 8.92926 19.9998Z"
        fill="white"
      />
    </svg>
  ),
};

export default Icons;
