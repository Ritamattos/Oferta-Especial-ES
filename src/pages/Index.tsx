import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-offer/5">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-offer bg-clip-text text-transparent">
          Baralho da Ousadia
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Desperte a paixão e intensifique a intimidade no seu relacionamento
        </p>
        <div className="space-y-4">
          <Button 
            onClick={() => navigate('/oferta-especial')}
            size="lg"
            className="bg-gradient-to-r from-primary to-offer hover:from-primary/90 hover:to-offer/90 text-white font-bold py-4 px-8 text-lg rounded-full shadow-xl"
          >
            🔥 Ver Oferta Especial 🔥
          </Button>
          <p className="text-sm text-muted-foreground">
            Acesso limitado - Por tempo limitado!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
