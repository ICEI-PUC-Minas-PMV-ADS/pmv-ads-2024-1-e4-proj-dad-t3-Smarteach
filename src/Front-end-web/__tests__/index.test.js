import { render, screen } from '@testing-library/react';
import { SessionProvider } from "next-auth/react";
import Header from '../src/components/Header'; // Ajuste o caminho conforme necessário

// Mock de session e next-auth
jest.mock('next-auth/react', () => ({
  useSession: () => ({
    status: 'authenticated',
    data: {
      user: { name: 'Test Admin', role: 'admin' }
    }
  })
}));

describe('Header Component', () => {
  it('deve exibir o botão de lista de usuários para administradores', () => {
    render(
      <SessionProvider session={{}}>
        <Header />
      </SessionProvider>
    );

    // Supondo que o botão para lista de usuários tenha um texto específico ou um aria-label
    const userListButton = screen.getByText('Lista de usuários');
    expect(userListButton).toBeInTheDocument();
  });

  it('não deve exibir o botão de lista de usuários para usuários não administradores', () => {
    // Mock para um usuário não administrador
    jest.mock('next-auth/react', () => ({
      useSession: () => ({
        status: 'authenticated',
        data: {
          user: { name: 'Test User', role: 'user' }
        }
      })
    }));

    render(
      <SessionProvider session={{}}>
        <Header />
      </SessionProvider>
    );

    const userListButton = screen.queryByText('Lista de usuários');
    expect(userListButton).not.toBeInTheDocument();
  });
});
