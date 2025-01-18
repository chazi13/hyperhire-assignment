import CardIcon from '../atoms/CardIcon';
import Icons from '../atoms/Icons';
import ServiceCard from '../atoms/ServiceCard';
import ServiceCardAction from '../atoms/ServiceCardAction';

const services = [
  {
    icon: <Icons.code />,
    label: '해외 개발자 원격 채용',
  },
  {
    icon: <Icons.user />,
    label: '외국인 원격 채용 (비개발)',
  },
  {
    icon: <Icons.kor />,
    label: '한국어 가능 외국인 채용',
  },
  {
    icon: <Icons.setting />,
    label: '해외 개발자 활용 서비스',
  },
];

export default function FooterServices() {
  return (
    <div className="grid grid-cols-2 gap-2 xl:grid-cols-4 xl:gap-4">
      {services.map((service) => (
        <ServiceCard key={service.label}>
          <div className="mb-3">
            <CardIcon size="sm" className="bg-[#EFF1F6]">
              {service.icon}
            </CardIcon>
          </div>
          <div className="flex-1">
            <p className="text-sm text-[#343741]">{service.label}</p>
          </div>
          <ServiceCardAction />
        </ServiceCard>
      ))}
    </div>
  );
}
