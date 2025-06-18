import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckIcon, Clock, Star, Shield } from 'lucide-react';

const OfertaEspecial = () => {
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutos em segundos

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const benefits = [
    "240+ Cartas con Desafíos Sensuales",
    "Guía Completa de Relaciones",
    "Acceso Inmediato a la Descarga",
    "Compatible con Todos los Dispositivos",
    "Actualizaciones Gratuitas por 1 Año"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/20 via-background to-offer/10">
      {/* Header con Oferta Especial */}
      <div className="bg-gradient-to-r from-urgent to-primary text-white py-3">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold animate-pulse">
            ⚡ OFERTA RELÁMPAGO - ¡VÁLIDA SOLO POR LOS PRÓXIMOS MINUTOS! ⚡
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Título Principal */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-offer bg-clip-text text-transparent mb-4">
            🛑 ¡ESPERA!
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            ¡Oferta Exclusiva Para Ti!
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Antes de irte, ¿qué tal llevarte la <span className="font-bold text-primary">Baraja de Audacia</span> con <span className="font-bold text-urgent">50% de DESCUENTO?</span>
          </p>
        </div>

        {/* Timer de Urgencia */}
        <Card className="bg-gradient-to-r from-urgent to-primary text-white mb-8 border-0 shadow-2xl animate-scale-in">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="w-6 h-6" />
              <span className="text-lg font-semibold">Esta oferta expira en:</span>
            </div>
            <div className="text-4xl md:text-6xl font-bold tracking-wider">
              {formatTime(timeLeft)}
            </div>
            <p className="text-sm opacity-90 mt-2">¡No pierdas esta oportunidad única!</p>
          </CardContent>
        </Card>

        {/* Sección del Producto con Descuento */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="overflow-hidden shadow-xl border-primary/20 hover-scale">
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-primary to-offer p-8 text-white text-center">
                <div className="w-32 h-32 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4 overflow-hidden">
                  <img 
                    src="/lovable-uploads/8b39edb2-f0dc-4ce7-b362-38dfbaf16bfe.png" 
                    alt="Baraja de Audacia" 
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">Baraja de Audacia</h3>
                <div className="flex items-center justify-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                  <span className="text-sm">(4.9/5)</span>
                </div>
              </div>
              <div className="p-6 bg-card">
                <div className="text-center mb-4">
                  <div className="text-lg text-muted-foreground line-through">
                    De: $7,40
                  </div>
                  <div className="text-3xl font-bold text-black mb-2">
                    Por solo: $3,70
                  </div>
                  <div className="inline-block bg-urgent text-white px-3 py-1 rounded-full text-sm font-semibold">
                    50% OFF
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center md:text-left">
              Qué vas a recibir:
            </h3>
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckIcon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Garantía */}
            <Card className="bg-secondary/50 border-secondary">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-primary" />
                  <div>
                    <h4 className="font-bold text-black">Garantía de 7 Días</h4>
                    <p className="text-sm text-muted-foreground">
                      100% de tu dinero de vuelta si no quedas satisfecho
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call-to-Action Final */}
        <div className="text-center space-y-6">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-urgent to-primary hover:from-urgent/90 hover:to-primary/90 text-white font-bold py-4 px-4 md:py-6 md:px-12 text-base md:text-xl rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 w-full max-w-md mx-auto"
            onClick={() => window.open('https://pay.hotmart.com/T96936639R?off=j4tv24yp&checkoutMode=10', '_blank')}
          >
            ¡QUIERO APROVECHAR ESTA OFERTA!
          </Button>
          
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              ✅ Acceso inmediato después del pago
            </p>
            <p className="text-sm text-muted-foreground">
              ✅ Pago 100% seguro
            </p>
            <p className="text-sm text-muted-foreground">
              ✅ Garantía incondicional de 7 días
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-offer/10 p-6 rounded-lg border border-primary/20">
            <p className="text-lg font-semibold text-center text-foreground">
              ⚠️ <span className="text-urgent">ATENCIÓN:</span> Esta oferta especial es válida solo para esta sesión. 
              ¡Si sales de esta página, no podrás acceder a este descuento nuevamente!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfertaEspecial;