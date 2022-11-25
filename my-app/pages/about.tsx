import Seo from '../components/Seo';

type AboutProps = {};

export default function about({}: AboutProps) {
  return (
    <div>
      <Seo title="About" />
      <h2>어바웃</h2>
    </div>
  );
}
