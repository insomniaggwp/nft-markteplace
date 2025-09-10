interface NFTCardProps {
  image: string;
  title: string;
  avatar?: string;
  artist?: string;
  withFooter?: boolean;
}

export default function NFTCard({
  image,
  title,
  avatar,
  artist,
  withFooter = false,
}: NFTCardProps) {
  return (
    <div className="card-nft flex flex-col">
      <img src={image} className="flex-[1.7] w-[100%]" />
      <div className="flex-[0.3] p-5 bg-primary-lighten rounded rounded-b-3xl">
        <h3 className="font-bold">{title}</h3>
        {artist && (
          <div className="flex gap-2 mt-2">
            <img src={avatar} width={24} height={24} />
            <p>{artist}</p>
          </div>
        )}
        {withFooter && (
          <div className="flex justify-between mt-5">
            <div>
              <p className="text-button-size">Price</p>
              <p>1.63 ETH</p>
            </div>
            <div className="text-right">
              <p className="text-button-size">Highest Bid</p>
              <p>0.33 wETH</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
