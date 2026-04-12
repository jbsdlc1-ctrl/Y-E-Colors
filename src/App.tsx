import { motion, AnimatePresence } from "motion/react";
import { 
  Paintbrush, 
  Layers, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  Menu, 
  X,
  ArrowRight,
  Star,
  Maximize2
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const services = [
  {
    title: "Pintura de Interiores",
    description: "Acabados de alta calidad con pinturas ecológicas y duraderas. Cuidamos cada detalle y protegemos tus muebles.",
    icon: Paintbrush,
    features: ["Pintura plástica", "Esmaltados", "Barnizados", "Paredes de acento"]
  },
  {
    title: "Alisado de Paredes",
    description: "Eliminamos el gotelé y las imperfecciones para dejar tus paredes completamente lisas y listas para pintar.",
    icon: Layers,
    features: ["Eliminación de gotelé", "Reparación de grietas", "Enlucidos", "Acabado espejo"]
  },
  {
    title: "Pintura de Exteriores",
    description: "Protección y estética para fachadas. Utilizamos materiales resistentes a la intemperie y rayos UV.",
    icon: CheckCircle2,
    features: ["Fachadas", "Revestimientos", "Tratamientos antihumedad", "Limpieza previa"]
  }
];

const gallery: { title: string; category: string; description: string; image: string }[] = [
  {
    title: "Preparación de Superficie",
    category: "Alisado",
    description: "Primera fase de limpieza y rascado para asegurar la adherencia del material.",
    image: "/antes.jpg"
  },
  {
    title: "Tratamiento de Grietas",
    category: "Alisado",
    description: "Sellado y refuerzo de fisuras estructurales antes del enlucido.",
    image: "/antes2.jpg"
  },
  {
    title: "Enlucido de Paredes",
    category: "Alisado",
    description: "Aplicación de capas de pasta para nivelar y suavizar la superficie.",
    image: "/despues.jpg"
  },
  {
    title: "Acabado Extra Liso",
    category: "Alisado",
    description: "Resultado final tras el lijado fino, listo para la imprimación.",
    image: "/despues2.jpg"
  },
  {
    title: "Pintura en Dormitorio",
    category: "Interior",
    description: "Aplicación de pintura plástica mate con recorte perfecto en techos.",
    image: "/IMG_20221020_130408.jpg"
  },
  {
    title: "Detalle de Esquinas",
    category: "Interior",
    description: "Acabados limpios en ángulos y marcos de puertas.",
    image: "/IMG_20221020_130445.jpg"
  },
  {
    title: "Pintura de Salón",
    category: "Interior",
    description: "Renovación total de color con materiales de alta cubrición.",
    image: "/IMG_20221020_130458.jpg"
  },
  {
    title: "Iluminación y Color",
    category: "Interior",
    description: "Cómo el color transforma la luminosidad de la estancia.",
    image: "/IMG_20221020_130522.jpg"
  },
  {
    title: "Protección de Suelos",
    category: "Pintura",
    description: "Nuestra prioridad es la limpieza; protegemos todo antes de empezar.",
    image: "/IMG_20221024_162401.jpg"
  },
  {
    title: "Recorte de Rodapiés",
    category: "Pintura",
    description: "Precisión máxima en los encuentros con el suelo.",
    image: "/IMG_20221024_171231.jpg"
  },
  {
    title: "Segunda Mano de Acabado",
    category: "Pintura",
    description: "Uniformidad total en la aplicación del color.",
    image: "/IMG_20221029_095139.jpg"
  },
  {
    title: "Resultado Profesional",
    category: "Pintura",
    description: "Entrega de obra limpia y con acabados impecables.",
    image: "/IMG_20221029_095215.jpg"
  }
];

const testimonials = [
  {
    name: "María G. (Badajoz)",
    text: "Increíble trabajo de alisado. Quitaron el gotelé de todo mi piso en tiempo récord y sin dejar ni una mota de polvo. El acabado es como un espejo.",
    rating: 5
  },
  {
    name: "Juan P. (Olivenza)",
    text: "Renovaron la fachada de mi casa de campo. Muy profesionales con el tratamiento de las grietas y la pintura elástica. Ha quedado impecable.",
    rating: 5
  },
  {
    name: "Elena M. (Mérida)",
    text: "Buscaba un color muy específico para mi salón y me asesoraron perfectamente. La limpieza y el cuidado de los muebles fue lo que más me gustó.",
    rating: 5
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<typeof gallery[0] | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-slate-900 selection:bg-orange-100 selection:text-orange-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-red-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
                <Paintbrush size={24} />
              </div>
              <span className="font-heading text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">Y&E Colors</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#ye-colors" className="text-sm font-medium hover:text-orange-600 transition-colors">Y&E Colors</a>
              <a href="#galeria" className="text-sm font-medium hover:text-orange-600 transition-colors">Galería</a>
              <a href="#opciones" className="text-sm font-medium hover:text-orange-600 transition-colors">Opciones</a>
              <a href="#contacto" className="text-sm font-medium hover:text-orange-600 transition-colors">Contacto</a>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-6" asChild>
                <a href="mailto:jbsdlc1@gmail.com?subject=Presupuesto Gratis - Y&E Colors">
                  Presupuesto Gratis
                </a>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-slate-100 p-4 space-y-4"
          >
            <a href="#ye-colors" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Y&E Colors</a>
            <a href="#galeria" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Galería</a>
            <a href="#opciones" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Opciones</a>
            <a href="#contacto" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Contacto</a>
            <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-full" asChild>
              <a href="mailto:jbsdlc1@gmail.com?subject=Presupuesto Gratis - Y&E Colors">
                Presupuesto Gratis
              </a>
            </Button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-orange-100 text-orange-700 border-none mb-6 px-4 py-1 text-sm font-medium">
                Expertos en Renovación de Paredes
              </Badge>
              <h1 className="font-heading text-5xl lg:text-7xl font-bold leading-[1.1] mb-6">
                Transformamos tus espacios con <span className="text-orange-600 italic">acabados perfectos</span>.
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                Especialistas en alisado de paredes y pintura decorativa. Devolvemos la vida a tu hogar con la limpieza y profesionalidad que te mereces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8 text-lg h-14" asChild>
                  <a href="#contacto">
                    Solicitar Presupuesto <ArrowRight className="ml-2" size={20} />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 text-lg h-14 border-slate-200 hover:bg-slate-50" asChild>
                  <a href="#galeria">Ver Nuestros Trabajos</a>
                </Button>
              </div>

            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/IMG_20221029_095215.jpg" 
                  alt="Resultado final de alisado y pintura Y&E Colors" 
                  className="w-full h-auto object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-100 rounded-full -z-0 blur-2xl opacity-60" />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-blue-100 rounded-full -z-0 blur-3xl opacity-60" />
              
              <div className="absolute bottom-8 -left-8 z-20 bg-white p-6 rounded-2xl shadow-xl hidden sm:block max-w-[200px]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="font-bold text-sm">Garantía 100%</span>
                </div>
                <p className="text-xs text-slate-500">Aseguramos la máxima calidad en cada proyecto realizado.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-4">Nuestro Trabajo</h2>
            <p className="text-slate-600">
              Una muestra de los proyectos que hemos realizado recientemente. Calidad visible en cada pincelada.
            </p>
          </div>
          <div className="flex gap-2">
            {["Todos", "Pintura", "Alisado", "Interior"].map((cat) => (
              <Button key={cat} variant="ghost" className="rounded-full px-6 text-sm font-medium hover:bg-slate-100">
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {gallery.length > 0 && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <div className="flex justify-between items-start">
                    <div>
                      <Badge className="w-fit mb-2 bg-orange-600 border-none">{item.category}</Badge>
                      <h3 className="text-white font-heading text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-orange-50 text-sm leading-relaxed opacity-90 line-clamp-2">{item.description}</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white">
                      <Maximize2 size={20} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
        {gallery.length === 0 && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 bg-slate-50 rounded-[2rem] border border-dashed border-slate-200">
            <p className="text-slate-500">Próximamente mostraremos aquí nuestros mejores trabajos.</p>
          </div>
        )}
      </section>

      {/* Options Section */}
      <section id="opciones" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-4">🧰 Nuestras Opciones – Tú eliges, nosotros lo hacemos perfecto</h2>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg">
              En cada proyecto cuidamos hasta el último detalle. Por eso te ofrecemos diferentes opciones para que consigas exactamente el acabado que buscas, adaptado a tu estilo, necesidades y presupuesto.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Acabados */}
            <Card className="border-none shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-4 text-2xl">🎨</div>
                <CardTitle className="font-heading text-2xl">Acabados a tu medida</CardTitle>
                <CardDescription>Dale personalidad a tus espacios:</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">• Pintura mate, satinada o brillo</li>
                  <li className="flex items-center gap-2">• Acabados decorativos modernos</li>
                  <li className="flex items-center gap-2">• Alisado de paredes: resultado liso</li>
                  <li className="flex items-center gap-2">• Eliminación de gotelé</li>
                </ul>
              </CardContent>
            </Card>

            {/* Preparación */}
            <Card className="border-none shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-4 text-2xl">🧱</div>
                <CardTitle className="font-heading text-2xl">Preparación profesional</CardTitle>
                <CardDescription>Un buen resultado empieza por una buena base:</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">• Reparación de grietas y desperfectos</li>
                  <li className="flex items-center gap-2">• Tratamientos antihumedad y antimoho</li>
                  <li className="flex items-center gap-2">• Lijado y preparación completa</li>
                </ul>
              </CardContent>
            </Card>

            {/* Comodidad */}
            <Card className="border-none shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-4 text-2xl">🏠</div>
                <CardTitle className="font-heading text-2xl">Comodidad total</CardTitle>
                <CardDescription>Tú no te preocupas por nada:</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">• Protección de muebles y suelos</li>
                  <li className="flex items-center gap-2">• Movimiento de mobiliario</li>
                  <li className="flex items-center gap-2">• Limpieza final incluida</li>
                </ul>
              </CardContent>
            </Card>

            {/* Personalización */}
            <Card className="border-none shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-4 text-2xl">🎯</div>
                <CardTitle className="font-heading text-2xl">Personalización</CardTitle>
                <CardDescription>Te ayudamos a acertar:</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">• Asesoramiento en colores</li>
                  <li className="flex items-center gap-2">• Pruebas de color antes de empezar</li>
                  <li className="flex items-center gap-2">• Ideas para paredes decorativas</li>
                </ul>
              </CardContent>
            </Card>

            {/* Servicio Rápido */}
            <Card className="border-none shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-4 text-2xl">⚡</div>
                <CardTitle className="font-heading text-2xl">Servicio rápido y flexible</CardTitle>
                <CardDescription>Nos adaptamos a ti:</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">• Trabajos urgentes o exprés</li>
                  <li className="flex items-center gap-2">• Horarios flexibles</li>
                  <li className="flex items-center gap-2">• Presupuesto gratuito</li>
                </ul>
              </CardContent>
            </Card>

            {/* Garantía */}
            <Card className="border-none shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-4 text-2xl">🛡️</div>
                <CardTitle className="font-heading text-2xl">Garantía y confianza</CardTitle>
                <CardDescription>Trabajamos con seriedad:</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">• Garantía por escrito</li>
                  <li className="flex items-center gap-2">• Materiales de primera calidad</li>
                  <li className="flex items-center gap-2">• Seguro de responsabilidad civil</li>
                </ul>
              </CardContent>
            </Card>

            {/* Ecológicas */}
            <Card className="border-none shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-4 text-2xl">🌿</div>
                <CardTitle className="font-heading text-2xl">Opciones ecológicas</CardTitle>
                <CardDescription>Cuidamos tu hogar y el entorno:</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">• Pinturas ecológicas sin olores</li>
                  <li className="flex items-center gap-2">• Procesos responsables</li>
                </ul>
              </CardContent>
            </Card>

            {/* Diferencia */}
            <Card className="border-none shadow-sm">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-4 text-2xl">⭐</div>
                <CardTitle className="font-heading text-2xl">Marcar la diferencia</CardTitle>
                <CardDescription>Porque importa:</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-center gap-2">• Resultados “antes y después”</li>
                  <li className="flex items-center gap-2">• Atención cercana y profesional</li>
                  <li className="flex items-center gap-2">• Ofertas especiales</li>
                </ul>
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="bg-orange-600 text-white border-none shadow-lg flex flex-col justify-center items-center p-8 text-center">
              <p className="text-xl font-bold mb-2">👉 Pide tu presupuesto hoy mismo y transforma tu espacio sin complicaciones.</p>
              <p className="text-orange-100 mb-6 font-medium">Escríbenos a: jbsdlc1@gmail.com</p>
              <Button className="bg-white text-orange-600 hover:bg-orange-50 rounded-full font-bold px-8" asChild>
                <a href="#contacto">¡Contactar Ahora!</a>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="ye-colors" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="bg-orange-100 text-orange-700 border-none mb-6 px-4 py-1">Sobre Nosotros</Badge>
          <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            Pasión por el detalle y compromiso con la <span className="text-orange-600">excelencia</span>.
          </h2>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            <p>
              En <span className="font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">Y&E Colors</span>, no solo pintamos paredes; transformamos hogares. Nacimos con la misión de ofrecer un servicio de pintura y alisado que destaque por su limpieza, puntualidad y acabados impecables.
            </p>
            <p>
              Sabemos que tu casa es tu refugio. Por eso, tratamos cada proyecto como si fuera para nosotros mismos, protegiendo cada mueble y asegurando que, al terminar, lo único que notes sea la belleza de tus nuevas paredes.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="flex flex-col items-center gap-3">
                <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Limpieza Total</p>
                  <p className="text-sm">Dejamos todo impecable.</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="bg-orange-100 p-3 rounded-full text-orange-600">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Puntualidad</p>
                  <p className="text-sm">Cumplimos los plazos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] shadow-xl border border-slate-100 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-16 bg-slate-50">
                <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6">Hablemos de tu proyecto</h2>
                <p className="text-slate-600 mb-10 text-lg">
                  ¿Necesitas un presupuesto personalizado? Rellena el formulario y nos pondremos en contacto contigo en menos de 24 horas.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-orange-600">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium">Llámanos</p>
                      <p className="text-lg font-bold">600 684 585</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-orange-600">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium">Email</p>
                      <p className="text-lg font-bold">jbsdlc1@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-orange-600">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium">Ubicación</p>
                      <p className="text-lg font-bold">Badajoz Capital</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 flex gap-4">
                  <a href="#" className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-slate-600 hover:text-orange-600 transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-slate-600 hover:text-orange-600 transition-colors">
                    <Facebook size={20} />
                  </a>
                </div>
              </div>

              <div className="p-8 lg:p-16">
                {formStatus === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="font-heading text-3xl font-bold">¡Solicitud Enviada!</h3>
                    <p className="text-slate-600 text-lg max-w-sm">
                      Gracias por confiar en nosotros. Tu gestor de correo se ha abierto para enviar los detalles. Te responderemos en menos de 24 horas.
                    </p>
                    <Button 
                      variant="outline" 
                      className="rounded-full"
                      onClick={() => setFormStatus('idle')}
                    >
                      Enviar otro mensaje
                    </Button>
                  </motion.div>
                ) : (
                  <form 
                    className="space-y-6" 
                    onSubmit={(e) => {
                      e.preventDefault();
                      const formData = new FormData(e.currentTarget);
                      const name = formData.get('name');
                      const phone = formData.get('phone');
                      const email = formData.get('email');
                      const service = formData.get('service');
                      const message = formData.get('message');
                      
                      const mailtoLink = `mailto:jbsdlc1@gmail.com?subject=Nueva Solicitud de Presupuesto - ${name}&body=Nombre: ${name}%0D%0ATeléfono: ${phone}%0D%0AEmail: ${email}%0D%0AServicio: ${service}%0D%0AMensaje: ${message}`;
                      window.location.href = mailtoLink;
                      setFormStatus('success');
                    }}
                  >
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Nombre</label>
                        <Input name="name" required placeholder="Tu nombre" className="rounded-xl border-slate-200 h-12" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Teléfono</label>
                        <Input name="phone" required placeholder="Tu teléfono" className="rounded-xl border-slate-200 h-12" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input name="email" type="email" required placeholder="tu@email.com" className="rounded-xl border-slate-200 h-12" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Servicio Interesado</label>
                      <select name="service" className="w-full h-12 rounded-xl border border-slate-200 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20">
                        <option>Pintura de Interiores</option>
                        <option>Alisado de Paredes</option>
                        <option>Pintura de Exteriores</option>
                        <option>Otros</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Mensaje</label>
                      <Textarea name="message" required placeholder="Cuéntanos un poco sobre lo que necesitas..." className="rounded-xl border-slate-200 min-h-[120px]" />
                    </div>
                    <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-xl h-14 text-lg font-bold">
                      Enviar Solicitud
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-red-600 rounded-lg flex items-center justify-center text-white shadow-md shadow-blue-500/10">
                  <Paintbrush size={20} />
                </div>
                <span className="font-heading text-xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">Y&E Colors</span>
              </div>
              <p className="text-slate-500 max-w-sm leading-relaxed">
                Empresa líder en servicios de pintura y alisado. Nos apasiona transformar hogares y crear espacios donde dé gusto vivir.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-6">Enlaces</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#ye-colors" className="hover:text-orange-600 transition-colors">Y&E Colors</a></li>
                <li><a href="#galeria" className="hover:text-orange-600 transition-colors">Galería</a></li>
                <li><a href="#opciones" className="hover:text-orange-600 transition-colors">Opciones</a></li>
                <li><a href="#contacto" className="hover:text-orange-600 transition-colors">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-6">Legal</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#" className="hover:text-orange-600 transition-colors">Aviso Legal</a></li>
                <li><a href="#" className="hover:text-orange-600 transition-colors">Política de Privacidad</a></li>
                <li><a href="#" className="hover:text-orange-600 transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>© 2026 Y&E Colors. Todos los derechos reservados.</p>
            <p>Diseñado con ❤️ para tu hogar.</p>
          </div>
        </div>
      </footer>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full bg-white rounded-[2rem] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-6 right-6 z-10 p-2 bg-black/10 hover:bg-black/20 rounded-full transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="aspect-[4/3] md:aspect-auto">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 sm:p-12 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-orange-100 text-orange-700 border-none px-4 py-1">
                    {selectedImage.category}
                  </Badge>
                  <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6">
                    {selectedImage.title}
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    {selectedImage.description}
                  </p>
                  <Button 
                    className="w-fit bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8 h-12"
                    asChild
                  >
                    <a href="#contacto" onClick={() => setSelectedImage(null)}>
                      Preguntar por este servicio
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
