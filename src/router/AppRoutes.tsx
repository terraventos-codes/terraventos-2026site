import { Navigate, Route, Routes } from 'react-router-dom';
import AppShell from './AppShell';
import { useAppShellContext } from './appShellContext';
import HomePage from '../pages/HomePage';
import PropriedadesPage from '../pages/PropriedadesPage';
import PaginaTaiba from '../components/PaginaTaiba';
import RegiaoPage from '../pages/RegiaoPage';
import InstitucionalPage from '../pages/InstitucionalPage';
import PropriedadeIndividualPage from '../pages/PropriedadeIndividualPage';
import VentoAfavorPage from '../pages/VentoAfavorPage';
import Pagina404 from '../components/Pagina404';
import BlogIndexPage from '../pages/BlogIndexPage';
import BlogPostPage from '../pages/BlogPostPage';
import AdminRoot from '../admin/AdminRoot';
import AdminGuard from '../admin/AdminGuard';
import AdminLoginPage from '../admin/AdminLoginPage';
import AdminLayout from '../admin/AdminLayout';
import AdminPostsListPage from '../admin/posts/AdminPostsListPage';
import AdminPostEditorPage from '../admin/posts/AdminPostEditorPage';

// Wrapper para que o "onBack" do 404 (dentro do AppShell) use o previousPath real.
function NotFoundRoute() {
  const { previousPath, transitionNavigate } = useAppShellContext();
  return <Pagina404 onBack={() => transitionNavigate(previousPath || '/')} />;
}

function chromedRoutes() {
  return (
    <>
      <Route index element={<HomePage />} />
      <Route path="propriedades" element={<PropriedadesPage />} />
      <Route
        path="taiba"
        element={
          <div id="taiba">
            <PaginaTaiba />
          </div>
        }
      />
      <Route path="tatajuba" element={<RegiaoPage regionKey="tatajuba" />} />
      <Route path="prea" element={<RegiaoPage regionKey="prea" />} />
      <Route path="bitupita" element={<RegiaoPage regionKey="bitupita" />} />
      <Route path="jericoacoara" element={<RegiaoPage regionKey="jericoacoara" />} />
      <Route path="guriu" element={<RegiaoPage regionKey="guriu" />} />
      <Route path="quem-somos" element={<InstitucionalPage pageType="quem-somos" />} />
      <Route path="termos-e-condicoes" element={<InstitucionalPage pageType="termos-e-condicoes" />} />
      <Route path="politica-de-privacidade" element={<InstitucionalPage pageType="politica-de-privacidade" />} />
      <Route path="contato" element={<InstitucionalPage pageType="contato" />} />
      <Route path="propriedade/:slug" element={<PropriedadeIndividualPage />} />
      <Route path="blog" element={<BlogIndexPage />} />
      <Route path="blog/:slug" element={<BlogPostPage />} />
      <Route path="*" element={<NotFoundRoute />} />
    </>
  );
}

export default function AppRoutes() {
  return (
    <Routes>
      {/* /ventoafavor é fullscreen, sem header/footer — fica fora do AppShell */}
      <Route path="/ventoafavor" element={<VentoAfavorPage />} />
      <Route path="/en/ventoafavor" element={<VentoAfavorPage />} />
      <Route path="/es/ventoafavor" element={<VentoAfavorPage />} />

      {/* Painel interno — fora do AppShell público (sem header/footer/i18n),
          mesmo tratamento estrutural do /ventoafavor acima. */}
      <Route path="/admin" element={<AdminRoot />}>
        <Route path="login" element={<AdminLoginPage />} />
        <Route element={<AdminGuard />}>
          <Route element={<AdminLayout />}>
            <Route index element={<Navigate to="/admin/posts" replace />} />
            <Route path="posts" element={<AdminPostsListPage />} />
            <Route path="posts/new" element={<AdminPostEditorPage />} />
            <Route path="posts/:id/edit" element={<AdminPostEditorPage />} />
          </Route>
        </Route>
      </Route>

      {/* Árvore pt (sem prefixo) */}
      <Route path="/" element={<AppShell />}>
        {chromedRoutes()}
      </Route>

      {/* Árvore /en e /es — segmentos literais (não :lang dinâmico), para que
          qualquer outro prefixo (/fr, /rota-qualquer) nunca "case" aqui e caia
          corretamente no catch-all "*" da árvore pt acima. */}
      <Route path="/en" element={<AppShell />}>
        {chromedRoutes()}
      </Route>
      <Route path="/es" element={<AppShell />}>
        {chromedRoutes()}
      </Route>
    </Routes>
  );
}
