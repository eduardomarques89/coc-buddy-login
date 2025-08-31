import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import cocLogo from "@/assets/coc-logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simular um delay de login
    setTimeout(() => {
      if (email && password) {
        toast({
          title: "Login realizado com sucesso!",
          description: "Bem-vindo ao seu assistente virtual COC.",
        });
        navigate("/dashboard");
      } else {
        toast({
          title: "Erro no login",
          description: "Por favor, preencha todos os campos.",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-coc-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Header com logo e título */}
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <img 
              src={cocLogo} 
              alt="COC Logo" 
              className="h-24 w-auto animate-fade-in"
            />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-foreground">
              Bem vindo ao seu
            </h1>
            <h2 className="text-2xl font-semibold bg-gradient-coc bg-clip-text text-transparent">
              assistente virtual
            </h2>
          </div>
        </div>

        {/* Card de Login */}
        <Card className="shadow-coc border-border/50 animate-slide-in">
          <CardHeader className="space-y-1">
            <h3 className="text-xl font-semibold text-center text-foreground">
              Faça seu login
            </h3>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  E-mail
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="transition-all duration-200 focus:shadow-glow"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-foreground">
                  Senha
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="transition-all duration-200 focus:shadow-glow"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-coc hover:opacity-90 shadow-coc transition-all duration-200 hover:shadow-glow"
                disabled={isLoading}
              >
                {isLoading ? "Entrando..." : "Entrar"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;