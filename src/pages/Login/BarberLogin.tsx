import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const loginSchema = z.object({
  email: z.string().email({ message: "E-mail inválido" }),
  password: z
    .string()
    .min(6, { message: "A senha deve ter pelo menos 6 caracteres" }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const BarberLogin = () => {
  const { toast } = useToast();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log(data);
    // In a real app, you would send this data to an authentication API
    toast({
      title: "Login realizado com sucesso",
      description: "Você será redirecionado em instantes.",
    });
  };

  return (
    <div className="flex min-h-screen bg-barber-lightgray">
      <div className="w-full md:w-1/2 lg:w-1/3 m-auto p-4">
        <div className="mb-8 text-center">
          <Link to="/" className="inline-block">
            <span className="text-3xl font-display font-bold text-barber-black">
              Barber<span className="text-barber-darkblue">Hub</span>
            </span>
          </Link>
        </div>

        <Card className="w-full shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-display text-center">
              Área do Barbeiro
            </CardTitle>
            <CardDescription className="text-center">
              Entre com suas credenciais para acessar o sistema
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mail</FormLabel>
                      <FormControl>
                        <Input placeholder="seu@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Senha</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="******"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full bg-barber-black text-white hover:bg-black/80"
                >
                  Entrar
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-sm text-center w-full">
              <Link
                to="/forgot-password"
                className="text-barber-darkblue hover:underline"
              >
                Esqueceu a senha?
              </Link>
            </div>
            <Separator />
            <div className="text-center w-full text-sm">
              <span className="text-muted-foreground mr-1">
                Não tem uma conta?
              </span>
              <Link
                to="/barber-register"
                className="text-barber-darkblue font-semibold hover:underline"
              >
                Registrar
              </Link>
            </div>
          </CardFooter>
        </Card>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <Link
            to="/client-login"
            className="text-barber-darkblue hover:underline"
          >
            Sou cliente
          </Link>
          {" • "}
          <Link to="/" className="text-barber-darkblue hover:underline">
            Voltar para o início
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BarberLogin;
