import FooterDescription from '../atoms/FooterDescription';
import FooterSubtitle from '../atoms/FooterSubtitle';
import Logo from '../atoms/Logo';
import FooterServices from '../molecules/FooterServices';

export default function Footer() {
  return (
    <footer className="bg-footer-bg px-4 pb-15 pt-16">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-y-15">
        <div className="flex flex-col gap-y-4.5 xl:flex-row xl:justify-between">
          <div className="space-y-4">
            <Logo src="/colored-logo.png" width={187} height={34} alt="Hyperhire logo" className="h-[34] w-[187]" />
            <div className="w-60">
              <FooterSubtitle className="text-sm">
                우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
              </FooterSubtitle>
            </div>
            <div className="flex flex-col">
              <FooterDescription>010-0000-0000</FooterDescription>
              <FooterDescription>aaaaa@naver.com</FooterDescription>
            </div>
          </div>
          <FooterServices />
        </div>
        <div className="flex flex-col gap-y-9 xl:flex-row xl:justify-between">
          <div className="flex gap-3 xl:w-[510px]">
            <div className="space-y-2.5">
              <FooterSubtitle>상호명</FooterSubtitle>
              <div className="flex flex-col space-y-1.5">
                <FooterDescription>하이퍼하이어</FooterDescription>
                <FooterDescription>Hyperhire India Private Limited</FooterDescription>
              </div>
            </div>
            <div className="space-y-2.5">
              <FooterSubtitle>대표 CEO</FooterSubtitle>
              <div className="flex flex-col space-y-1.5">
                <FooterDescription>김주현</FooterDescription>
                <FooterDescription>Juhyun Kim</FooterDescription>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-y-9 xl:flex-row xl:gap-x-10">
            <div className="space-y-2.5">
              <FooterSubtitle>사업자등록번호 CIN</FooterSubtitle>
              <div className="flex flex-col space-y-1.5">
                <FooterDescription>427-86-01187</FooterDescription>
                <FooterDescription>U74110DL2016PTC290812</FooterDescription>
              </div>
            </div>
            <div className="space-y-2.5">
              <FooterSubtitle>주소 ADDRESS</FooterSubtitle>
              <div className="flex flex-col space-y-1.5">
                <FooterDescription>서울특별시 강남대로 479, 지하 1층 238호 </FooterDescription>
                <FooterDescription>
                  D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi,
                  <br />
                  110053 India
                </FooterDescription>
              </div>
            </div>
          </div>
        </div>
        <div>
          <FooterDescription className="flex items-center gap-1">
            <span className="text-lg">&copy;</span> 2023 Hyperhire
          </FooterDescription>
        </div>
      </div>
    </footer>
  );
}
