export default function VideoCardDisplay({data}) {
    return (
      <div class="cardtwo">
        <div class="wishlist-icon">
          <i class="fa fa-heart"></i>
        </div>
        <img
          src={data.thumbnail}
          alt="download"
        />
        <div class="cardtwo-details">
          <h2>{data.title}</h2>
          Views: {data.views}  | Creator: {data.creator}
        </div>
      </div>
    );
  }