import { computed, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, useSSRContext, unref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { useHead } from "@unhead/vue";
import { _ as _export_sfc, s as siteData, g as games } from "../main.mjs";
import "vite-ssg";
const _sfc_main$1 = {
  __name: "GameCard",
  __ssrInlineRender: true,
  props: {
    game: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const truncatedDescription = computed(() => {
      const desc = props.game.metaDescription || props.game.description;
      if (desc.length > 100) {
        return desc.substring(0, 100) + "...";
      }
      return desc;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<article${ssrRenderAttrs(mergeProps({
        class: "card h-100 game-card",
        itemscope: "",
        itemtype: "https://schema.org/VideoGame"
      }, _attrs))} data-v-18dc61c3>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: `/posts/${__props.game.slug}/`,
        class: "card-link",
        "aria-label": `Play ${__props.game.title}`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", `/posts/${__props.game.slug}/${__props.game.thumbnail}`)}${ssrRenderAttr("alt", `${__props.game.title} - Free Online Puzzle Game`)} class="card-img-top" loading="lazy" width="300" height="180" itemprop="image" data-v-18dc61c3${_scopeId}><div class="card-body" data-v-18dc61c3${_scopeId}><h2 class="card-title h5" itemprop="name" data-v-18dc61c3${_scopeId}>${ssrInterpolate(__props.game.shortTitle || __props.game.title)}</h2><p class="card-text text-muted" itemprop="description" data-v-18dc61c3${_scopeId}>${ssrInterpolate(truncatedDescription.value)}</p><div class="card-categories" data-v-18dc61c3${_scopeId}><!--[-->`);
            ssrRenderList(__props.game.categories.slice(0, 2), (category) => {
              _push2(`<span class="badge bg-secondary me-1" itemprop="genre" data-v-18dc61c3${_scopeId}>${ssrInterpolate(category)}</span>`);
            });
            _push2(`<!--]--></div></div><meta itemprop="url"${ssrRenderAttr("content", `https://games.muthu.co/posts/${__props.game.slug}/`)} data-v-18dc61c3${_scopeId}><span itemprop="offers" itemscope itemtype="https://schema.org/Offer" style="${ssrRenderStyle({ "display": "none" })}" data-v-18dc61c3${_scopeId}><meta itemprop="price" content="0" data-v-18dc61c3${_scopeId}><meta itemprop="priceCurrency" content="USD" data-v-18dc61c3${_scopeId}></span>`);
          } else {
            return [
              createVNode("img", {
                src: `/posts/${__props.game.slug}/${__props.game.thumbnail}`,
                alt: `${__props.game.title} - Free Online Puzzle Game`,
                class: "card-img-top",
                loading: "lazy",
                width: "300",
                height: "180",
                itemprop: "image"
              }, null, 8, ["src", "alt"]),
              createVNode("div", { class: "card-body" }, [
                createVNode("h2", {
                  class: "card-title h5",
                  itemprop: "name"
                }, toDisplayString(__props.game.shortTitle || __props.game.title), 1),
                createVNode("p", {
                  class: "card-text text-muted",
                  itemprop: "description"
                }, toDisplayString(truncatedDescription.value), 1),
                createVNode("div", { class: "card-categories" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.game.categories.slice(0, 2), (category) => {
                    return openBlock(), createBlock("span", {
                      key: category,
                      class: "badge bg-secondary me-1",
                      itemprop: "genre"
                    }, toDisplayString(category), 1);
                  }), 128))
                ])
              ]),
              createVNode("meta", {
                itemprop: "url",
                content: `https://games.muthu.co/posts/${__props.game.slug}/`
              }, null, 8, ["content"]),
              createVNode("span", {
                itemprop: "offers",
                itemscope: "",
                itemtype: "https://schema.org/Offer",
                style: { "display": "none" }
              }, [
                createVNode("meta", {
                  itemprop: "price",
                  content: "0"
                }),
                createVNode("meta", {
                  itemprop: "priceCurrency",
                  content: "USD"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</article>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/GameCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const GameCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-18dc61c3"]]);
const _sfc_main = {
  __name: "HomePage",
  __ssrInlineRender: true,
  setup(__props) {
    const faqs = [
      {
        question: "Are these games free to play?",
        answer: "Yes! All the games are completely free to play. No downloads, no registration, and no hidden costs. Just open your browser and start playing."
      },
      {
        question: "Do I need to download anything?",
        answer: "No downloads required. All games run directly in your web browser using JavaScript. They work on desktop computers, tablets, and mobile phones."
      },
      {
        question: "Are puzzle games good for your brain?",
        answer: "Research shows that puzzle games can improve cognitive function, including memory, concentration, and problem-solving skills. Regular play may help maintain mental sharpness as you age."
      },
      {
        question: "Which game should I start with?",
        answer: "If you are new to puzzle games, start with classics like Tic Tac Toe or Minesweeper. For more challenge, try Sudoku or Connect 4. The N-Queens and Knight's Tour are great for advanced players."
      }
    ];
    useHead({
      title: "Brain Busters - Free Online Puzzle Games | Sudoku, Minesweeper & More",
      meta: [
        { name: "description", content: siteData.description },
        { name: "keywords", content: "puzzle games, brain games, sudoku, minesweeper, tic tac toe, connect 4, word search, logic games, free online games" },
        { property: "og:title", content: "Brain Busters - Free Online Puzzle Games" },
        { property: "og:description", content: siteData.description },
        { property: "og:url", content: siteData.siteUrl },
        { property: "og:type", content: "website" },
        { name: "twitter:title", content: "Brain Busters - Free Online Puzzle Games" },
        { name: "twitter:description", content: siteData.description }
      ],
      link: [
        { rel: "canonical", href: siteData.siteUrl + "/" }
      ],
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Brain Busters - Free Online Puzzle Games",
            "description": siteData.description,
            "url": siteData.siteUrl,
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": games.map((game, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "url": `${siteData.siteUrl}/posts/${game.slug}/`,
                "name": game.title
              }))
            }
          })
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "container py-4" }, _attrs))} data-v-1170c7bd><header class="mb-5" data-v-1170c7bd><h1 class="page-title mb-3" data-v-1170c7bd>Brain Training Games</h1><p class="page-subtitle" data-v-1170c7bd> Free puzzle games. No downloads. Play in your browser. </p></header><section aria-labelledby="games-heading" data-v-1170c7bd><h2 id="games-heading" class="visually-hidden" data-v-1170c7bd>All Games</h2><div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4" data-v-1170c7bd><!--[-->`);
      ssrRenderList(unref(games), (game) => {
        _push(`<div class="col" data-v-1170c7bd>`);
        _push(ssrRenderComponent(GameCard, { game }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></section><section class="mt-5 pt-4 border-top" aria-labelledby="about-games-heading" data-v-1170c7bd><h2 id="about-games-heading" class="section-title mb-3" data-v-1170c7bd>About</h2><div class="row" data-v-1170c7bd><div class="col-md-6" data-v-1170c7bd><h3 class="subsection-title" data-v-1170c7bd>Why Play Puzzle Games?</h3><p class="body-text" data-v-1170c7bd> Puzzle games improve logical thinking, memory, and concentration. From Sudoku to the Knight&#39;s Tour—all skill levels welcome. </p></div><div class="col-md-6" data-v-1170c7bd><h3 class="subsection-title" data-v-1170c7bd>Play Anywhere</h3><p class="body-text" data-v-1170c7bd> All games work directly in your browser. No downloads, no registration. Just play. </p></div></div></section><section class="mt-5 pt-4 border-top" aria-labelledby="faq-heading" data-v-1170c7bd><h2 id="faq-heading" class="section-title mb-4" data-v-1170c7bd>FAQ</h2><div class="accordion" id="faqAccordion" data-v-1170c7bd><!--[-->`);
      ssrRenderList(faqs, (faq, index) => {
        _push(`<div class="accordion-item" data-v-1170c7bd><h3 class="accordion-header" data-v-1170c7bd><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"${ssrRenderAttr("data-bs-target", `#faq${index}`)}${ssrRenderAttr("aria-expanded", false)}${ssrRenderAttr("aria-controls", `faq${index}`)} data-v-1170c7bd>${ssrInterpolate(faq.question)}</button></h3><div${ssrRenderAttr("id", `faq${index}`)} class="accordion-collapse collapse" data-bs-parent="#faqAccordion" data-v-1170c7bd><div class="accordion-body text-muted" data-v-1170c7bd>${ssrInterpolate(faq.answer)}</div></div></div>`);
      });
      _push(`<!--]--></div></section></article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/HomePage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HomePage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1170c7bd"]]);
export {
  HomePage as default
};
