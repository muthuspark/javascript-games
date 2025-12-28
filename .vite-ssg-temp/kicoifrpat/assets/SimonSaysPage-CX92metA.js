import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { u as useGameLoader, a as useGameSeo, B as Breadcrumb, G as GameFaqs, R as RelatedGames } from "./RelatedGames-Bqp8dbEn.js";
import { _ as _export_sfc } from "../main.mjs";
import "@unhead/vue";
import "vite-ssg";
const _sfc_main = {
  __name: "SimonSaysPage",
  __ssrInlineRender: true,
  setup(__props) {
    const game = {
      slug: "simon-says",
      title: "Simon Says Game - Memory Sequence Game",
      shortTitle: "Simon Says",
      description: "Watch the color sequence and repeat it back. Each round adds one more color. How long can you keep up? Classic memory game with sound.",
      metaDescription: "Play Simon Says online free. Watch and repeat the growing sequence of colors and sounds. Test your memory with this classic electronic game.",
      categories: ["Memory Games", "Classic Games", "Challenge"],
      keywords: ["simon says", "memory game", "sequence game", "pattern memory", "color game", "brain training"],
      initCode: "",
      faqs: [
        {
          question: "How do you play Simon Says?",
          answer: "Watch the colored buttons light up in a sequence, then repeat that sequence by clicking the buttons in the same order. Each round adds one more color to the sequence. The game ends when you make a mistake."
        },
        {
          question: "What is the world record for Simon Says?",
          answer: "While records vary by version, expert players can often remember sequences of 30+ colors. The key is to develop memory techniques like chunking colors into groups or creating patterns."
        },
        {
          question: "How can I improve at Simon Says?",
          answer: "Try associating each color with a word or phrase. Group colors into chunks of 3-4. Some players find it helpful to say the colors out loud or tap a rhythm. Regular practice builds your working memory capacity."
        }
      ]
    };
    const breadcrumbItems = [
      { name: "Home", path: "/" },
      { name: "Games", path: "/" },
      { name: game.shortTitle || game.title, path: `/posts/${game.slug}/` }
    ];
    useGameLoader(game.slug, game.initCode);
    useGameSeo(game);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({
        class: "container py-4",
        itemscope: "",
        itemtype: "https://schema.org/VideoGame"
      }, _attrs))} data-v-10c2ca26>`);
      _push(ssrRenderComponent(Breadcrumb, { items: breadcrumbItems }, null, _parent));
      _push(`<header class="mb-4" data-v-10c2ca26><h1 class="mb-2" itemprop="name" data-v-10c2ca26>${ssrInterpolate(game.title)}</h1><p class="text-muted lead" itemprop="description" data-v-10c2ca26>${ssrInterpolate(game.description)}</p><div class="mb-3" data-v-10c2ca26><!--[-->`);
      ssrRenderList(game.categories, (category) => {
        _push(`<span class="badge bg-success me-2" itemprop="genre" data-v-10c2ca26>${ssrInterpolate(category)}</span>`);
      });
      _push(`<!--]--></div></header><section class="game-section" aria-label="Game Area" data-v-10c2ca26><div class="game-container" data-v-10c2ca26><div class="stats" data-v-10c2ca26><div data-v-10c2ca26>Round: <span id="score" data-v-10c2ca26>0</span></div><div data-v-10c2ca26>Best: <span id="highScore" data-v-10c2ca26>0</span></div></div><div class="simon-board" data-v-10c2ca26><div id="green" class="simon-btn disabled" data-v-10c2ca26></div><div id="red" class="simon-btn disabled" data-v-10c2ca26></div><div id="yellow" class="simon-btn disabled" data-v-10c2ca26></div><div id="blue" class="simon-btn disabled" data-v-10c2ca26></div><div class="center-circle" data-v-10c2ca26><span id="score-display" data-v-10c2ca26>0</span></div></div><div id="status" class="status" data-v-10c2ca26>Press Start to begin!</div><div class="controls" data-v-10c2ca26><button id="startBtn" onclick="startGame()" data-v-10c2ca26>Start Game</button></div><p class="instructions" data-v-10c2ca26> Watch the sequence of colors, then repeat it by clicking the buttons. Each round adds one more color to remember! </p></div></section>`);
      _push(ssrRenderComponent(GameFaqs, {
        faqs: game.faqs
      }, null, _parent));
      _push(ssrRenderComponent(RelatedGames, {
        currentSlug: game.slug,
        categories: game.categories
      }, null, _parent));
      _push(`<meta itemprop="url"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/`)} data-v-10c2ca26><meta itemprop="image"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/thumbnail.png`)} data-v-10c2ca26><meta itemprop="applicationCategory" content="Game" data-v-10c2ca26><meta itemprop="operatingSystem" content="Web Browser" data-v-10c2ca26><span itemprop="offers" itemscope itemtype="https://schema.org/Offer" style="${ssrRenderStyle({ "display": "none" })}" data-v-10c2ca26><meta itemprop="price" content="0" data-v-10c2ca26><meta itemprop="priceCurrency" content="USD" data-v-10c2ca26></span></article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/games/SimonSaysPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SimonSaysPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-10c2ca26"]]);
export {
  SimonSaysPage as default
};
