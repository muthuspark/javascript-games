import { ref, onMounted, onBeforeUnmount, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext, computed } from "vue";
import { useHead } from "@unhead/vue";
import { s as siteData, _ as _export_sfc, g as games } from "../main.mjs";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
const loadedExtraScripts = /* @__PURE__ */ new Set();
function useGameLoader(slug, initCode, extraScripts = []) {
  const loadedElements = ref([]);
  const loadExtraScript = (src) => {
    return new Promise((resolve, reject) => {
      if (loadedExtraScripts.has(src)) {
        resolve();
        return;
      }
      const existing = document.querySelector(`script[src="${src}"]`);
      if (existing) {
        loadedExtraScripts.add(src);
        resolve();
        return;
      }
      const script = document.createElement("script");
      script.src = src;
      script.async = false;
      script.onload = () => {
        loadedExtraScripts.add(src);
        resolve();
      };
      script.onerror = () => {
        console.error(`Failed to load script: ${src}`);
        reject(new Error(`Failed to load: ${src}`));
      };
      document.head.appendChild(script);
    });
  };
  const loadGameAssets = async () => {
    const scriptPath = `/posts/${slug}/script.js`;
    if (extraScripts.length > 0) {
      try {
        await Promise.all(extraScripts.map((src) => loadExtraScript(src)));
      } catch (e) {
        console.error("Error loading extra scripts:", e);
      }
    }
    const cssPath = `/posts/${slug}/style.css`;
    const existingLink = document.querySelector(`link[href="${cssPath}"]`);
    if (!existingLink) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = cssPath;
      document.head.appendChild(link);
      loadedElements.value.push(link);
    }
    const script = document.createElement("script");
    script.src = scriptPath;
    script.async = false;
    script.dataset.gameSlug = slug;
    script.onload = () => {
      setTimeout(() => {
        try {
          if (initCode) {
            new Function(initCode)();
          }
        } catch (e) {
          console.error("Error initializing game:", e);
        }
      }, 50);
    };
    script.onerror = () => {
      console.error(`Failed to load script: ${scriptPath}`);
    };
    document.body.appendChild(script);
    loadedElements.value.push(script);
  };
  const cleanupAssets = () => {
    loadedElements.value.forEach((el) => {
      if (el.parentNode) {
        el.parentNode.removeChild(el);
      }
    });
    loadedElements.value = [];
  };
  onMounted(() => {
    loadGameAssets();
  });
  onBeforeUnmount(() => {
    cleanupAssets();
  });
  return {
    loadGameAssets,
    cleanupAssets
  };
}
function useGameSeo(game) {
  var _a, _b;
  const pageTitle = `${game.title} - Play Free Online | Brain Busters`;
  const pageUrl = `${siteData.siteUrl}/posts/${game.slug}/`;
  const imageUrl = `${siteData.siteUrl}/posts/${game.slug}/thumbnail.png`;
  const gameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": game.title,
    "description": game.metaDescription || game.description,
    "url": pageUrl,
    "image": imageUrl,
    "genre": game.categories,
    "gamePlatform": "Web Browser",
    "applicationCategory": "Game",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "author": {
      "@type": "Person",
      "name": siteData.author.name
    },
    "publisher": {
      "@type": "Organization",
      "name": "Brain Busters"
    }
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteData.siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": game.shortTitle || game.title,
        "item": pageUrl
      }
    ]
  };
  const scripts = [
    { type: "application/ld+json", children: JSON.stringify(gameSchema) },
    { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) }
  ];
  if ((_a = game.faqs) == null ? void 0 : _a.length) {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": game.faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
    scripts.push({ type: "application/ld+json", children: JSON.stringify(faqSchema) });
  }
  useHead({
    title: pageTitle,
    meta: [
      { name: "description", content: game.metaDescription || game.description },
      { name: "keywords", content: ((_b = game.keywords) == null ? void 0 : _b.join(", ")) || "" },
      { property: "og:title", content: game.title },
      { property: "og:description", content: game.metaDescription || game.description },
      { property: "og:url", content: pageUrl },
      { property: "og:type", content: "website" },
      { property: "og:image", content: imageUrl },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: game.title },
      { name: "twitter:description", content: game.metaDescription || game.description },
      { name: "twitter:image", content: imageUrl }
    ],
    link: [
      { rel: "canonical", href: pageUrl }
    ],
    script: scripts
  });
  return {
    pageTitle,
    pageUrl,
    imageUrl
  };
}
const _sfc_main$2 = {
  __name: "Breadcrumb",
  __ssrInlineRender: true,
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<nav${ssrRenderAttrs(mergeProps({
        "aria-label": "Breadcrumb",
        class: "breadcrumb-nav"
      }, _attrs))} data-v-931f0f6b><ol class="breadcrumb mb-3" itemscope itemtype="https://schema.org/BreadcrumbList" data-v-931f0f6b><!--[-->`);
      ssrRenderList(__props.items, (item, index) => {
        _push(`<li class="${ssrRenderClass([{ active: index === __props.items.length - 1 }, "breadcrumb-item"])}" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem" data-v-931f0f6b>`);
        if (index < __props.items.length - 1) {
          _push(ssrRenderComponent(_component_router_link, {
            to: item.path,
            itemprop: "item"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span itemprop="name" data-v-931f0f6b${_scopeId}>${ssrInterpolate(item.name)}</span>`);
              } else {
                return [
                  createVNode("span", { itemprop: "name" }, toDisplayString(item.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<span itemprop="name" aria-current="page" data-v-931f0f6b>${ssrInterpolate(item.name)}</span>`);
        }
        _push(`<meta itemprop="position"${ssrRenderAttr("content", index + 1)} data-v-931f0f6b></li>`);
      });
      _push(`<!--]--></ol></nav>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Breadcrumb.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Breadcrumb = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-931f0f6b"]]);
const _sfc_main$1 = {
  __name: "GameFaqs",
  __ssrInlineRender: true,
  props: {
    faqs: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      if ((_a = __props.faqs) == null ? void 0 : _a.length) {
        _push(`<section${ssrRenderAttrs(mergeProps({
          class: "mt-5 pt-4 border-top",
          "aria-labelledby": "faq-heading"
        }, _attrs))} data-v-284c09be><h2 id="faq-heading" class="section-title mb-4" data-v-284c09be>FAQ</h2><div class="accordion" id="gameFaqAccordion" data-v-284c09be><!--[-->`);
        ssrRenderList(__props.faqs, (faq, index) => {
          _push(`<div class="accordion-item" data-v-284c09be><h3 class="accordion-header" data-v-284c09be><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"${ssrRenderAttr("data-bs-target", `#gameFaq${index}`)}${ssrRenderAttr("aria-expanded", false)}${ssrRenderAttr("aria-controls", `gameFaq${index}`)} data-v-284c09be>${ssrInterpolate(faq.question)}</button></h3><div${ssrRenderAttr("id", `gameFaq${index}`)} class="accordion-collapse collapse" data-bs-parent="#gameFaqAccordion" data-v-284c09be><div class="accordion-body text-muted" data-v-284c09be>${ssrInterpolate(faq.answer)}</div></div></div>`);
        });
        _push(`<!--]--></div></section>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/GameFaqs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const GameFaqs = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-284c09be"]]);
const _sfc_main = {
  __name: "RelatedGames",
  __ssrInlineRender: true,
  props: {
    currentSlug: {
      type: String,
      required: true
    },
    categories: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const relatedGames = computed(() => {
      return games.filter((g) => g.slug !== props.currentSlug).filter((g) => g.categories.some((c) => props.categories.includes(c))).slice(0, 3);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      if (relatedGames.value.length) {
        _push(`<section${ssrRenderAttrs(mergeProps({
          class: "mt-5 pt-4 border-top",
          "aria-labelledby": "related-heading"
        }, _attrs))} data-v-45efdb2f><h2 id="related-heading" class="section-title mb-4" data-v-45efdb2f>More Games</h2><div class="row row-cols-1 row-cols-md-3 g-3" data-v-45efdb2f><!--[-->`);
        ssrRenderList(relatedGames.value, (game) => {
          _push(`<div class="col" data-v-45efdb2f>`);
          _push(ssrRenderComponent(_component_router_link, {
            to: `/posts/${game.slug}/`,
            class: "card h-100 text-decoration-none related-game-card"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img${ssrRenderAttr("src", `/posts/${game.slug}/${game.thumbnail}`)}${ssrRenderAttr("alt", `Play ${game.shortTitle || game.title}`)} class="card-img-top" loading="lazy" data-v-45efdb2f${_scopeId}><div class="card-body" data-v-45efdb2f${_scopeId}><h3 class="card-title h6 mb-0" data-v-45efdb2f${_scopeId}>${ssrInterpolate(game.shortTitle || game.title)}</h3></div>`);
              } else {
                return [
                  createVNode("img", {
                    src: `/posts/${game.slug}/${game.thumbnail}`,
                    alt: `Play ${game.shortTitle || game.title}`,
                    class: "card-img-top",
                    loading: "lazy"
                  }, null, 8, ["src", "alt"]),
                  createVNode("div", { class: "card-body" }, [
                    createVNode("h3", { class: "card-title h6 mb-0" }, toDisplayString(game.shortTitle || game.title), 1)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div></section>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/RelatedGames.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RelatedGames = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-45efdb2f"]]);
export {
  Breadcrumb as B,
  GameFaqs as G,
  RelatedGames as R,
  useGameSeo as a,
  useGameLoader as u
};
