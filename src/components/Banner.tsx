import Image from 'next/image';

export default function Banner() {
  return (
    <div style={{ width: '100%', marginBottom: '40px' }}>
      <Image
        src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
        alt="AI Banner"
        width={1600}
        height={600}
        style={{ width: '100%', height: 'auto', borderRadius: '16px' }}
      />
    </div>
  );
}
