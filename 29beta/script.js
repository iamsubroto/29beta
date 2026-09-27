/* ============================================================
   CHATVIONIKO AFILIADOS — script.js (29beta)
   ============================================================ */

(function () {
  'use strict';

  /* ------ Header: scroll detection + mobile menu ------ */
  const header = document.querySelector('.site-header');
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');

  function updateHeader() {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 12);
  }

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      const isOpen = mobileNav.classList.toggle('open');
      hamburger.classList.toggle('active', isOpen);
      header.classList.toggle('menu-open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    // Close mobile nav when a link is clicked
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('active');
        header.classList.remove('menu-open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ------ Reveal on scroll (IntersectionObserver) ------ */
  var revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.12 }
  );

  document.querySelectorAll('.reveal').forEach(function (el) {
    revealObserver.observe(el);
  });

  /* ------ Interactive Affiliate Commission Calculator ------ */
  const rangeInput = document.getElementById('affiliate-subscriptions');
  const numberInput = document.getElementById('affiliate-subscriptions-number');
  const resultDisplay = document.getElementById('calculator-potential-result');
  const breakdownDisplay = document.getElementById('calculator-breakdown-text');

  const launchPrice = 29;
  const directRate = 0.2;
  const commissionPerSubscription = launchPrice * directRate; // 5.80 USD

  function formatUsd(val) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: val % 1 === 0 ? 0 : 2,
    }).format(val);
  }

  function updateCalculator(subs) {
    var count = Math.max(1, parseInt(subs, 10) || 1);
    var potentialCommission = count * commissionPerSubscription;
    var formattedCommission = formatUsd(potentialCommission);
    var formattedPerSub = formatUsd(commissionPerSubscription);

    if (rangeInput && rangeInput.value != count) {
      rangeInput.value = Math.min(150, count);
    }
    if (numberInput && numberInput.value != count) {
      numberInput.value = count;
    }
    if (resultDisplay) {
      resultDisplay.textContent = formattedCommission;
    }
    if (breakdownDisplay) {
      breakdownDisplay.innerHTML =
        count +
        ' suscripciones x ' +
        formattedPerSub +
        ' = <span class="text-lime-glow">' +
        formattedCommission +
        '</span>';
    }
  }

  if (rangeInput) {
    rangeInput.addEventListener('input', function (e) {
      updateCalculator(e.target.value);
    });
  }

  if (numberInput) {
    numberInput.addEventListener('input', function (e) {
      updateCalculator(e.target.value);
    });
  }

  // Initial calculation on page load
  if (rangeInput || numberInput) {
    updateCalculator(rangeInput ? rangeInput.value : 25);
  }
})();
