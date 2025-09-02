function Contact() {
  return (
    <section className="py-20 bg-gray-800" id="contact">
      <h2 className="text-4xl font-bold text-center mb-12 text-neon-purple">Contacto</h2>
      <div className="flex flex-col items-center space-y-4">
        <a 
          href="mailto:aranoherrera92@gmail.com?subject=Hola!%20Escribeme" 
          className="px-6 py-3 bg-neon-pink text-gray-900 font-bold rounded-xl shadow-lg hover:shadow-neon transition duration-300"
        >
          Escribirme por Email
        </a>
        <a 
          href="https://www.linkedin.com/in/francisco-leonardo-arano-herrera-540198169" 
          target="_blank" 
          className="px-6 py-3 bg-neon-blue text-gray-900 font-bold rounded-xl shadow-lg hover:shadow-neon transition duration-300"
        >
          LinkedIn
        </a>
        <a 
          href="https://github.com/FLAranoHerrera" 
          target="_blank" 
          className="px-6 py-3 bg-neon-cyan text-gray-900 font-bold rounded-xl shadow-lg hover:shadow-neon transition duration-300"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}

export default Contact;
