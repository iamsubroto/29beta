<?php 
header('Content-Type: text/html; charset=UTF-8');

function to_utf8($str) {
    if ($str === null || $str === '') return '';
    if (function_exists('mb_check_encoding') && mb_check_encoding($str, 'UTF-8')) {
        return $str;
    }
    if (function_exists('mb_convert_encoding')) {
        return mb_convert_encoding($str, 'UTF-8', 'Windows-1252');
    }
    if (function_exists('iconv')) {
        return iconv('Windows-1252', 'UTF-8//IGNORE', $str);
    }
    return utf8_encode($str);
}

// Allow from any origin
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}

// Access-Control headers are received during OPTIONS requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
}

if (isset($_GET['mode']) && $_GET['mode'] === 'edit') {
    $subdominio = $_GET['subdominio'] ?? '';

    header("Location: https://vioniko.com/landingpage/3beta/index_beta.php?subdominio=" . urlencode($subdominio) . "&mode=edit");
    exit;
}

$template = 194;
include_once('../../subdominio_ini.php');
$userIdBySubdomain = $rowUSU["clave"] ?? '';
$video = !empty($video) ? $video : 'https://chatvk.s3.us-west-2.amazonaws.com/academia_vioniko_landing_sin_precio.mp4';
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Webinar ChatVioniko | Un webinar que te contesta</title>
  <meta name="description" content="Webinar gratuito: descubre todo lo que estamos lanzando con ChatVioniko y resuelve tus dudas en tiempo real con un asistente de IA.">
  <meta property="og:title" content="Webinar ChatVioniko | Un webinar que te contesta">
  <meta property="og:description" content="Webinar gratuito: descubre todo lo que estamos lanzando con ChatVioniko y resuelve tus dudas en tiempo real con un asistente de IA.">
  <meta property="og:type" content="website">
  <meta name="theme-color" content="#030711">
  <link rel="stylesheet" href="style.css?v=1.0.6">
</head>
<body>

  <!-- Hidden Campaign Tracking Inputs -->
  <input type="hidden" id="pais" name="pais" value="<?= htmlspecialchars($pais ?? '') ?>">
  <input type="hidden" id="ciudad" name="ciudad" value="<?= htmlspecialchars($ciudad ?? '') ?>">
  <input type="hidden" id="estado" name="estado" value="<?= htmlspecialchars($estado ?? '') ?>">
  <input type="hidden" id="usuario" name="usuario" value="<?= htmlspecialchars($userIdBySubdomain ?? '') ?>">
  <input type="hidden" id="template" name="template" value="<?= htmlspecialchars($template ?? 194) ?>">
  <input type="hidden" id="idioma" name="idioma" value="es">

  <!-- Fixed Top Header Navigation -->
  <header class="site-header">
    <div class="header-inner">
      <a href="#inicio" class="header-logo" aria-label="ChatVioniko, volver al inicio">
        <img src="logos/logo_chico.png" alt="ChatVioniko" width="40" height="40">
        <span class="header-logo-text">ChatVioniko</span>
      </a>

      <nav class="header-nav" aria-label="Principal">
      </nav>

      <div class="header-cta">
        <a href="https://chatvioniko.com" class="btn btn-primary btn-header" target="_blank" rel="noopener">VER WEBINAR AHORA</a>
      </div>

      <button type="button" class="hamburger" aria-label="Abrir menu" aria-expanded="false">
        <span class="hamburger-icon" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
    </div>

    <!-- Mobile Drawer Menu -->
    <nav class="mobile-nav" aria-label="Principal movil">
      <div class="mobile-nav-inner">
        <a href="https://chatvioniko.com" class="btn btn-primary btn-full" style="margin-top: 0.75rem;" target="_blank" rel="noopener">VER WEBINAR AHORA</a>
      </div>
    </nav>
  </header>

  <main id="inicio">

    <!-- Section 1: Hero Section -->
    <section class="section" style="padding-top: 6rem; padding-bottom: 4rem;">
      <div class="ambient-field" style="position: absolute; inset: 0;" aria-hidden="true"></div>
      
      <div class="container">
        <!-- Hero Logo Badge Header -->
        <div class="reveal" style="display: flex; justify-content: center; margin-bottom: 2rem; position: relative; z-index: 10;">
          <div class="hero-logo-glow" style="display: flex; flex-direction: column; align-items: center; text-align: center;">
            <div class="hero-logo-box">
              <img src="logos/logo_chico.png" alt="ChatVioniko" width="56" height="56">
            </div>
            <p class="hero-title gradient-text">ChatVioniko</p>
            <p style="margin-top: 0.75rem; font-size: 0.875rem; font-weight: 900; text-transform: uppercase; color: var(--mist);">Webinar</p>
          </div>
        </div>

        <!-- 2-Column Hero Grid: Left Content + Right Visual Mockup Widget -->
        <div class="hero-content-grid">
          <div class="reveal">
            <span class="eyebrow-badge">Webinar disponible ahora</span>
            <h1 class="hero-main-title">
              Un webinar que<br>
              <span class="gradient-text">te contesta.</span>
            </h1>
            <p style="margin-top: 1.5rem; max-width: 42rem; font-size: 1.125rem; line-height: 1.75rem; color: var(--mist);">
              Descubre todo lo que estamos lanzando con ChatVioniko y resuelve tus dudas en tiempo real con nuestro asistente de IA. Míralo cuando quieras.
            </p>

            <!-- Action Buttons Stack -->
            <div class="hero-btn-stack">
              <a href="https://chatvioniko.com" class="btn btn-primary" target="_blank" rel="noopener">VER WEBINAR AHORA</a>
            </div>

            
          </div>
        </div>
      </div>
    </section>

    <!-- MAIN VIDEO -->
    <section class="section" style="padding-top:3rem;">
      <div class="container">
        <div class="reveal">
          <!-- <div class="section-heading"><p class="eyebrow">Mira lo que vas a aprender</p></div> -->
          <div style="margin-top:2rem;">
            <button type="button" class="video-preview video-preview--wide" data-src="<?= $video; ?>" data-title="Video general de Academia Vioniko" aria-label="Abrir video: Video general de Academia Vioniko">
              <video src="<?= $video; ?>#t=0.001" muted playsinline webkit-playsinline preload="auto" aria-hidden="true"></video>
              <span class="video-preview-overlay"></span>
              <span class="video-grid-overlay video-grid"></span>
              <span class="video-preview-play">
                <span class="play-btn"><span class="play-triangle"></span></span>
              </span>
            </button>
          </div>
          <!-- <div style="margin-top:1.5rem; max-width: 36rem; margin-left: auto; margin-right: auto;">
            <a href="#contact" class="video-section__cta-btn">
              Quiero ser de los primeros: CLICK Aqui para Ver Webinar
            </a>
          </div> -->
        </div>
      </div>
    </section>

    <!-- Section 4: What You Recommending Section -->
    <section id="que-incluye" class="section">
      <div class="container">
        <div class="reveal">
          <div class="section-heading">
            <span class="eyebrow">Lo que vas a descubrir</span>
            <h2>No es solo un chat.</h2>
            <p class="subtitle">ChatVioniko reúne múltiples herramientas de inteligencia artificial en un solo lugar.</p>
          </div>
        </div>

        <div class="feature-grid">
          <div class="reveal">
            <article class="feature-card feature-card--cyan">
              <h3>Un equipo de asesores con IA</h3>
              <p>GPT, Claude, Gemini, DeepSeek y Grok en un solo lugar, cada uno en la tarea que mejor hace.</p>
            </article>
          </div>

          <div class="reveal">
            <article class="feature-card feature-card--violet">
              <h3>Biblioteca de prompts</h3>
              <p>Prompts preparados que pueden personalizarse y enviarse directamente al chat.</p>
            </article>
          </div>

          <div class="reveal">
            <article class="feature-card feature-card--lime">
              <h3>Escritura guiada</h3>
              <p>Define producto, audiencia, objetivo, formato y tono para generar varias propuestas de contenido.</p>
            </article>
          </div>

          <div class="reveal">
            <article class="feature-card feature-card--cyan">
              <h3>Analizador de mercado y SEO</h3>
              <p>Descubre qué busca tu cliente y qué palabras usar para que te encuentre en internet.</p>
            </article>
          </div>

          <div class="reveal">
            <article class="feature-card feature-card--violet">
              <h3>Generación de imágenes con IA</h3>
              <p>Creación de piezas visuales mediante prompts directamente desde la plataforma.</p>
            </article>
          </div>

          <div class="reveal">
            <article class="feature-card feature-card--lime">
              <h3>Analizador de videos de YouTube</h3>
              <p>Entiende lo esencial de cualquier video de YouTube en minutos, incluso si está en otro idioma.</p>
            </article>
          </div>

          <div class="reveal">
            <article class="feature-card feature-card--cyan">
              <h3>Apps y juegos sin programar</h3>
              <p>Crea apps, simuladores y juegos con solo describirlos, sin saber programar.</p>
            </article>
          </div>

          <div class="reveal">
            <article class="feature-card feature-card--violet">
              <h3>Asistentes IA</h3>
              <p>Asistentes configurables para investigación, creación de contenido, monitoreo, correo, recordatorios y otras tareas.</p>
            </article>
          </div>

          <div class="reveal">
            <article class="feature-card feature-card--lime">
              <h3>Creación de chatbots</h3>
              <p>Chatbots personalizados para WordPress, páginas corporativas, landing pages, sitios de servicios, negocios y atención al cliente.</p>
            </article>
          </div>

          <!-- Featured Academia Card -->
          <div class="reveal" style="grid-column: 1 / -1;">
            <article class="academy-card">
              <div class="panel-lines" style="position: absolute; inset: 0;" aria-hidden="true"></div>
              <div class="academy-grid" style="position: relative;">
                <div>
                  <span class="eyebrow-badge" style="border-color: rgba(163, 230, 53, 0.25); background: rgba(163, 230, 53, 0.1); color: var(--lime-glow);">Academia Vioniko</span>
                  <h3 style="margin-top: 1rem; font-size: 1.875rem; font-weight: 900; text-transform: uppercase; color: #fff;">Aquí sí te contestan.</h3>
                  <p style="margin-top: 1rem; font-size: 1rem; line-height: 1.75rem; color: var(--mist);">
                    Allá afuera ves tutoriales, pero nadie te contesta. Aquí tienes expertos que te ayudan paso a paso.
                  </p>
                </div>

                <div style="display: flex; flex-direction: column; gap: 0.75rem;">
                  <p style="border-radius: 0.375rem; border: 1px solid rgba(255, 255, 255, 0.1); background: rgba(255, 255, 255, 0.04); padding: 0.75rem; font-size: 0.875rem; font-weight: 700; color: var(--mist);">
                    <span style="color: var(--lime-glow); margin-right: 0.5rem;" aria-hidden="true">✓</span> Asesoría privada de expertos, en máximo 24 horas hábiles
                  </p>
                  <p style="border-radius: 0.375rem; border: 1px solid rgba(255, 255, 255, 0.1); background: rgba(255, 255, 255, 0.04); padding: 0.75rem; font-size: 0.875rem; font-weight: 700; color: var(--mist);">
                    <span style="color: var(--lime-glow); margin-right: 0.5rem;" aria-hidden="true">✓</span> Videocomunidad con tutoriales nuevos cada semana
                  </p>
                  <p style="border-radius: 0.375rem; border: 1px solid rgba(255, 255, 255, 0.1); background: rgba(255, 255, 255, 0.04); padding: 0.75rem; font-size: 0.875rem; font-weight: 700; color: var(--mist);">
                    <span style="color: var(--lime-glow); margin-right: 0.5rem;" aria-hidden="true">✓</span> Clases en vivo gratis cada jueves
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>

        <!-- Trial Callout Banner: "Ahora pruebalo tu" (max-w-5xl) -->
        <div class="reveal" style="margin-top: 2.5rem;">
          <div class="banner-box-callout max-w-5xl">
            <p style="font-size: 0.875rem; font-weight: 900; text-transform: uppercase; color: var(--cyan-glow);">Velo por ti mismo</p>
            <h2 class="banner-title">
              Descubre todo lo que puedes hacer<br>
              <span class="gradient-text">con ChatVioniko</span>
            </h2>
            <p style="margin: 1.25rem auto 0; max-width: 48rem; font-size: 1rem; line-height: 1.75rem; color: var(--mist);">
              En el webinar te mostramos la plataforma a fondo y, desde que te registras, puedes probarla gratis.
            </p>
            <div style="margin-top: 2rem;">
              <a href="https://chatvioniko.com" class="btn btn-primary" target="_blank" rel="noopener">Probar ChatVioniko gratis</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 7: Target Audience Section (max-w-5xl chip container) -->
    <section class="section" style="padding-top: 2rem;">
      <div class="container">
        <div class="reveal">
          <div class="section-heading">
            <h2>¿Para quién es?</h2>
            <p class="subtitle">Para cualquier persona que quiera usar la inteligencia artificial para trabajar mejor y hacer crecer su negocio.</p>
          </div>
        </div>

        <div class="max-w-5xl" style="margin-top: 3rem; display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem;">
          <div class="reveal"><span class="chip-tag">Creadores de contenido</span></div>
          <div class="reveal"><span class="chip-tag">Marketers</span></div>
          <div class="reveal"><span class="chip-tag">Emprendedores</span></div>
          <div class="reveal"><span class="chip-tag">Agencias</span></div>
          <div class="reveal"><span class="chip-tag">Educadores</span></div>
          <div class="reveal"><span class="chip-tag">Comunidades</span></div>
          <div class="reveal"><span class="chip-tag">Freelancers</span></div>
          <div class="reveal"><span class="chip-tag">Personas interesadas en IA</span></div>
        </div>
      </div>
    </section>

    <!-- Section 9: FAQ Section (Full Container Width max-w-7xl) -->
    <section id="preguntas" class="section">
      <div class="container">
        <div class="reveal">
          <div class="section-heading">
            <h2>Preguntas frecuentes</h2>
          </div>
        </div>

        <div class="reveal" style="margin-top: 3rem;">
          <div class="faq-grid" style="max-width: 48rem; margin: 0 auto; grid-template-columns: 1fr;">
            <!-- Group 1: Webinar -->
            <div class="faq-group">
              <h3 class="faq-group-title">Webinar</h3>
              <div class="faq-stack">
                <details class="faq-item">
                  <summary class="faq-toggle">
                    <span>¿El webinar tiene costo?</span>
                    <span class="faq-icon" aria-hidden="true">+</span>
                  </summary>
                  <p class="faq-answer">No. Es gratis.</p>
                </details>

                <details class="faq-item">
                  <summary class="faq-toggle">
                    <span>¿A qué hora es?</span>
                    <span class="faq-icon" aria-hidden="true">+</span>
                  </summary>
                  <p class="faq-answer">Está disponible ahora. Lo ves cuando quieras.</p>
                </details>

                <details class="faq-item">
                  <summary class="faq-toggle">
                    <span>¿Puedo hacer preguntas durante el webinar?</span>
                    <span class="faq-icon" aria-hidden="true">+</span>
                  </summary>
                  <p class="faq-answer">Sí. Un asistente de inteligencia artificial te responde en tiempo real.</p>
                </details>

                <details class="faq-item">
                  <summary class="faq-toggle">
                    <span>¿Puedo probar ChatVioniko?</span>
                    <span class="faq-icon" aria-hidden="true">+</span>
                  </summary>
                  <p class="faq-answer">Sí. Al registrarte puedes empezar a probarlo gratis de inmediato.</p>
                </details>

                <details class="faq-item">
                  <summary class="faq-toggle">
                    <span>¿Qué necesito para entrar?</span>
                    <span class="faq-icon" aria-hidden="true">+</span>
                  </summary>
                  <p class="faq-answer">Solo tu nombre, correo y WhatsApp para enviarte el acceso.</p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 10: Final CTA Panel (max-w-5xl) -->
    <section class="section" style="padding-top: 2rem; padding-bottom: 6rem;">
      <div class="container">
        <div class="reveal">
          <div class="banner-box-callout max-w-5xl" style="border-color: rgba(139, 92, 246, 0.4); background: rgba(8, 17, 32, 0.8); box-shadow: var(--shadow-glow);">
            <p style="font-size: 0.875rem; font-weight: 900; text-transform: uppercase; color: var(--cyan-glow);">Webinar gratuito</p>
            <h2 class="banner-title">
              Llegar a tiempo vale más<br>
              <span class="gradient-text">que llegar preparado.</span>
            </h2>
            <p style="margin: 1.5rem auto 0; max-width: 48rem; font-size: 1rem; line-height: 1.75rem; color: var(--mist);">
              Mira el webinar y descubre por qué.
            </p>
            <div style="margin-top: 2rem;">
              <a href="https://chatvioniko.com" class="btn btn-primary" target="_blank" rel="noopener">VER WEBINAR AHORA</a>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="footer-inner">
      <p class="footer-brand">ChatVioniko</p>
      <nav class="footer-links" aria-label="Footer">
        <a href="#preguntas">Preguntas frecuentes</a>
      </nav>
      <p style="font-size: 0.875rem; color: var(--mist);">© ChatVioniko</p>
    </div>
  </footer>

  <!-- ========== VIDEO MODAL ========== -->
  <div class="video-modal" id="video-modal" role="presentation">
    <div class="video-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div class="video-modal-header">
        <h3 class="video-modal-title" id="modal-title"></h3>
        <button class="video-modal-close" id="modal-close" type="button" aria-label="Cerrar video">X</button>
      </div>
      <div class="video-modal-body">
        <video id="modal-video" controls autoplay playsinline webkit-playsinline preload="auto">
          Tu navegador no puede reproducir este video.
        </video>
      </div>
    </div>
  </div>

  <!-- Modal Form Popup -->
  <div id="form-popup-modal" class="form-popup-modal" aria-hidden="true" style="display: none;">
    <div class="form-popup-overlay"></div>
    <div class="form-popup-card">
      <button type="button" class="form-popup-close" aria-label="Close modal">&times;</button>
      <div class="form-popup-inner">
        <div class="temp-form">
          <div class="form-title" data-id="landing-page-form-title">
            <h2>🔴 Descubre la Experiencia Completa</h2>
          </div>
          <div class="form-subtitle" data-id="landing-page-form-sub-title">
            <p class="modal-sub-heading">Sé de los primeros en conocer esta nueva propuesta</p>
          </div>
          <form action="../../registro_prospecto_subdominio_autoresponder.php" method="post" class="cf op-optin-validation" id="myForm">
            <div class="form-group">
              <input type="text" name="nombre" class="form-control" id="name" required="" placeholder="Nombre">
              <small class="error-beta" style="display: none;">You must enter your name.</small>
            </div>

            <div class="form-group" id="whatsapp_field_div">
              <label for="phone" class="form-label-whatsapp">Whatsapp</label>
              <div class="iti iti--allow-dropdown iti--show-flags">
                <input type="tel" name="telefono_casa" class="form-control" id="phone" autocomplete="off" placeholder="01812-345678">
              </div>
            </div>

            <div class="form-group">
              <input type="email" name="email" class="form-control" required="" id="e-mail" placeholder="E-mail">
              <small class="error-beta" style="display: none;">You must enter a e-mail.</small>
            </div>

            <div class="form-group btn-submit-group">
              <button style="background: #ff1717" type="submit" data-id="landing-page-form-submit-button" class="btn btn-default btn-submit">
                <span>CLICK AQUI para ACCESAR AHORA</span>
              </button>
            </div>

            <input type="hidden" name="pais" id="pais" value="<?php echo to_utf8($geo["geoplugin_countryName"] ?? ''); ?>">
            <input type="hidden" name="ciudad" id="ciudad" value="<?php echo to_utf8($geo["geoplugin_city"] ?? ''); ?>">
            <input type="hidden" name="estado" id="estado" value="<?php echo to_utf8($geo["geoplugin_regionName"] ?? ''); ?>">
            <?php include('../campana_user.php'); ?>
            <input type="hidden" name="usuario" id="usuario" value="<?= htmlspecialchars($userIdBySubdomain ?? ''); ?>">
            <input type="hidden" name="template" id="template" value="<?= htmlspecialchars($template ?? 194); ?>">
            <input type="hidden" name="idioma" id="idioma" value="es">
          </form>
        </div>
      </div>
    </div>
  </div>

  <script src="script.js?v=1.0.6"></script>
</body>
</html>