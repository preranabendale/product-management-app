const MapSection = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h4 className="fw-bold mb-4 text-primary">Find Us Here</h4>

        <div className="ratio ratio-16x9 shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721..."
            title="Google Map"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
export default MapSection;