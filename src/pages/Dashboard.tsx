import Header from "@/components/Header";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-foreground">
            Bem-vindo ao COC
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Seu assistente virtual está pronto para ajudá-lo. 
            Navegue pelo menu para explorar as funcionalidades disponíveis.
          </p>
          <div className="bg-gradient-coc-subtle rounded-lg p-8 max-w-4xl mx-auto shadow-coc">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Painel Principal
            </h2>
            <p className="text-muted-foreground">
              Aqui você encontrará todas as ferramentas e recursos do seu assistente virtual.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;