import HeaderImage from "../../images/header_bg_3.jpg";
import Header from "../../components/Header";
import "./gallery.css";

const Gallery = () => {
  const galleryLenght = 15;
  const images = [];

  for (let i = 1; i <= galleryLenght; i++) {
    images.push(require(`../../images/gallery${i}.jpg`));
  }

  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fugiat
        nihil fugit nemo et! Facere, id impedit.
      </Header>
      <section className="gellery">
        <div className="container gallery__container">
          {images.map((image, index) => {
            return (
              <article key={index}>
                <img src={image} alt={`Gallery image ${index + 1}`} />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;
