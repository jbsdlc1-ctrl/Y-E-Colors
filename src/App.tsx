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

const gallery: { title: string; category: string; description: string; image: string }[] = [
  {
    title: "Preparación de Superficie",
    category: "Alisado",
    description: "Primera fase de limpieza y rascado para asegurar la adherencia del material.",
    image: "antes.jpg"
  },
  {
    title: "Tratamiento de Grietas",
    category: "Alisado",
    description: "Sellado y refuerzo de fisuras estructurales antes del enlucido.",
    image: "antes2.jpg"
  },
  {
    title: "Enlucido de Paredes",
    category: "Alisado",
    description: "Aplicación de capas de pasta para nivelar y suavizar la superficie.",
    image: "despues.jpg"
  },
  {
    title: "Acabado Extra Liso",
    category: "Alisado",
    description: "Resultado final tras el lijado fino, listo para la imprimación.",
    image: "despues2.jpg"
  },
  {
    title: "Pintura en Dormitorio",
    category: "Interior",
    description: "Aplicación de pintura plástica mate con recorte perfecto en techos.",
    image: "IMG_20221020_130408.jpg"
  },
  {
    title: "Detalle de Esquinas",
    category: "Interior",
    description: "Acabados limpios en ángulos y marcos de puertas.",
    image: "IMG_20221020_130445.jpg"
  },
  {
    title: "Pintura de Salón",
    category: "Interior",
    description: "Renovación total de color con materiales de alta cubrición.",
    image: "IMG_20221020_130458.jpg"
  },
  {
    title: "Iluminación y Color",
    category: "Interior",
    description: "Cómo el color transforma la luminosidad de la estancia.",
    image: "IMG_20221020_130522.jpg"
  },
  {
    title: "Protección de Suelos",
    category: "Pintura",
    description: "Nuestra prioridad es la limpieza; protegemos todo antes de empezar.",
    image: "IMG_20221024_162401.jpg"
  },
  {
    title: "Recorte de Rodapiés",
    category: "Pintura",
    description: "Precisión máxima en los encuentros con el suelo.",
    image: "IMG_20221024_171231.jpg"
  },
  {
    title: "Segunda Mano de Acabado",
    category: "Pintura",
    description: "Uniformidad total en la aplicación del color.",
    image: "IMG_20221029_095139.jpg"
  },
  {
    title: "Resultado Profesional",
    category: "Pintura",
    description: "Entrega de obra limpia y con acabados impecables.",
    image: "IMG_20221029_095215.jpg"
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<typeof gallery[0] | null>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-slate-900 selection:bg-orange-100 selection:text-orange-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-red-600 rounded-lg flex items-center justify-center text-white shadow-lg">
                <Paintbrush size={24} />
              </div>
              <span className="font-heading text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">Y&E Colors</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#sobre-nosotros" className="text-sm font-medium hover:text-orange-600 transition-colors">Sobre Nosotros</a>
              <a href="#galeria" className="text-sm font-medium hover:text-orange-600 transition-colors">Galería</a>
              <a href="#opciones" className="text-sm font-medium hover:text-orange-600 transition-colors">Opciones</a>
              <a href="#contacto" className="text-sm font-medium hover:text-orange-600 transition-colors">Contacto</a>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-6" asChild>
                <a href="mailto:jbsdlc1@gmail.com?subject=Presupuesto Gratis - Y&E Colors">Presupuesto Gratis</a>
              </Button>
            </div>

            <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="md:hidden bg-white border-b border-slate-100 p-4 space-y-4">
            <a href="#sobre-nosotros" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Sobre Nosotros</a>
            <a href="#galeria" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Galería</a>
            <a href="#opciones" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Opciones</a>
            <a href="#contacto" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Contacto</a>
            <Button className="w-full bg-orange-600 text-white rounded-full" asChild>
              <a href="mailto:jbsdlc1@gmail.com?subject=Presupuesto Gratis - Y&E Colors">Presupuesto Gratis</a>
            </Button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
              <Badge className="bg-orange-100 text-orange-700 border-none mb-6 px-4 py-1 text-sm font-medium">Expertos en Renovación</Badge>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6">
                Transformamos tus espacios con <span className="text-orange-600 italic">acabados perfectos</span>.
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-lg">Especialistas en alisado de paredes y pintura decorativa en Badajoz.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-600 text-white rounded-full px-8 h-14" asChild>
                  <a href="#contacto">Solicitar Presupuesto <ArrowRight className="ml-2" size={20} /></a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14" asChild>
                  <a href="#galeria">Ver Trabajos</a>
                </Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="relative">
              <img src="IMG_20221029_095215.jpg" alt="Y&E Colors" className="rounded-3xl shadow-2xl w-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="font-heading text-4xl font-bold mb-8">Nuestro Trabajo</h2>
          <div className="flex flex-wrap gap-2">
            {["Todos", "Pintura", "Alisado", "Interior"].map((cat) => (
              <Button key={cat} variant="ghost" className="rounded-full px-4 sm:px-6 text-sm font-medium hover:bg-slate-100">{cat}</Button>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((item, index) => (
            <motion.div key={index} className="group relative rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer" onClick={() => setSelectedImage(item)}>
              <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <Badge className="w-fit mb-2 bg-orange-600">{item.category}</Badge>
                <h3 className="text-white font-bold text-xl">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section id="sobre-nosotros" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl font-bold mb-8">Nuestra historia y compromiso con <span className="text-orange-600">tu hogar</span>.</h2>
          <div className="space-y-6 text-lg text-slate-600">
            <p>En <span className="font-bold text-orange-600">Y&E Colors</span>, somos expertos en transformar paredes con gotelé en superficies lisas y modernas en Badajoz.</p>
            <p>Nuestra filosofía se basa en la honestidad, el respeto por tu vivienda y la perfección en cada acabado.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
              <div className="flex flex-col items-center gap-2">
                <CheckCircle2 className="text-orange-600" size={32} />
                <p className="font-bold">Limpieza Total</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <CheckCircle2 className="text-orange-600" size={32} />
                <p className="font-bold">Puntualidad</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 bg-white p-8 lg:p-16 rounded-[3rem] shadow-xl">
            <div>
              <h2 className="font-heading text-4xl font-bold mb-6">Hablemos de tu proyecto</h2>
              <p className="text-slate-600 mb-8">¿Necesitas presupuesto? Llámanos o envíanos un mensaje.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4"><Phone className="text-orange-600" /> <span className="font-bold">600 684 585</span></div>
                <div className="flex items-center gap-4"><Mail className="text-orange-600" /> <span className="font-bold">jbsdlc1@gmail.com</span></div>
              </div>
            </div>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); window.location.href = "mailto:jbsdlc1@gmail.com"; setFormStatus('success'); }}>
              <Input name="name" required placeholder="Tu nombre" className="h-12 rounded-xl" />
              <Textarea name="message" required placeholder="¿Qué necesitas?" className="rounded-xl" />
              <Button type="submit" className="w-full bg-orange-600 text-white h-14 rounded-xl font-bold">Enviar Solicitud</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t text-center text-slate-400 text-sm">
        <p>© 2026 Y&E Colors. Badajoz, España.</p>
      </footer>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90" onClick={() => setSelectedImage(null)}>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full" onClick={e => e.stopPropagation()}>
              <img src={selectedImage.image} className="w-full aspect-video object-cover" />
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">{selectedImage.title}</h2>
                <p className="text-slate-600 mb-6">{selectedImage.description}</p>
                <Button className="bg-orange-600 text-white rounded-full px-8" onClick={() => setSelectedImage(null)}>Cerrar</Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
