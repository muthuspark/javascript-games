import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { u as useGameLoader, a as useGameSeo, B as Breadcrumb, G as GameFaqs, R as RelatedGames } from "./RelatedGames-Bqp8dbEn.js";
import { _ as _export_sfc } from "../main.mjs";
import "@unhead/vue";
import "vite-ssg";
const _sfc_main = {
  __name: "MemoryMatchPage",
  __ssrInlineRender: true,
  setup(__props) {
    const game = {
      slug: "memory-match",
      title: "Memory Match Game - Card Matching Puzzle",
      shortTitle: "Memory Match",
      description: "Flip cards to find matching pairs. Train your memory with this classic concentration game. Multiple grid sizes from easy to challenging.",
      metaDescription: "Play Memory Match online free. Flip cards to find matching pairs in this classic concentration game. 4 difficulty levels to challenge your memory skills.",
      categories: ["Puzzles", "Memory Games", "Classic Games"],
      keywords: ["memory game", "matching game", "concentration game", "card matching", "memory training", "brain game"],
      initCode: "newGame();",
      faqs: [
        {
          question: "How do you play Memory Match?",
          answer: "Click on cards to flip them over and reveal the icons. Try to find two cards with matching icons. When you find a match, both cards stay face up. Continue until all pairs are matched."
        },
        {
          question: "What are good strategies for memory games?",
          answer: "Start by flipping cards in a systematic pattern to build a mental map of their locations. Pay attention to every card that gets flipped, even when looking for other matches. Try to remember cards by their position relative to other cards."
        },
        {
          question: "How does Memory Match help train your brain?",
          answer: "Memory matching games improve short-term memory, concentration, and visual recognition skills. Regular practice can enhance your ability to remember and recall information quickly."
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
      }, _attrs))} data-v-857ac51d>`);
      _push(ssrRenderComponent(Breadcrumb, { items: breadcrumbItems }, null, _parent));
      _push(`<header class="mb-4" data-v-857ac51d><h1 class="mb-2" itemprop="name" data-v-857ac51d>${ssrInterpolate(game.title)}</h1><p class="text-muted lead" itemprop="description" data-v-857ac51d>${ssrInterpolate(game.description)}</p><div class="mb-3" data-v-857ac51d><!--[-->`);
      ssrRenderList(game.categories, (category) => {
        _push(`<span class="badge bg-success me-2" itemprop="genre" data-v-857ac51d>${ssrInterpolate(category)}</span>`);
      });
      _push(`<!--]--></div></header><section class="game-section" aria-label="Game Area" data-v-857ac51d><div class="game-container" data-v-857ac51d><div class="controls" data-v-857ac51d><select id="levelSelect" class="level-select" onchange="changeLevel()" data-v-857ac51d><option value="1" data-v-857ac51d>Easy (3x4)</option><option value="2" data-v-857ac51d>Medium (4x4)</option><option value="3" data-v-857ac51d>Hard (4x5)</option><option value="4" data-v-857ac51d>Expert (5x6)</option></select><button onclick="newGame()" data-v-857ac51d>New Game</button></div><div class="stats" data-v-857ac51d><div data-v-857ac51d>Moves: <span id="moveCount" data-v-857ac51d>0</span></div><div data-v-857ac51d>Time: <span id="timer" data-v-857ac51d>00:00</span></div><div data-v-857ac51d>Best: <span id="bestScore" data-v-857ac51d>-</span></div></div><div id="winner" class="winner" data-v-857ac51d></div><div class="board" data-v-857ac51d></div></div></section>`);
      _push(ssrRenderComponent(GameFaqs, {
        faqs: game.faqs
      }, null, _parent));
      _push(ssrRenderComponent(RelatedGames, {
        currentSlug: game.slug,
        categories: game.categories
      }, null, _parent));
      _push(`<meta itemprop="url"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/`)} data-v-857ac51d><meta itemprop="image"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/thumbnail.png`)} data-v-857ac51d><meta itemprop="applicationCategory" content="Game" data-v-857ac51d><meta itemprop="operatingSystem" content="Web Browser" data-v-857ac51d><span itemprop="offers" itemscope itemtype="https://schema.org/Offer" style="${ssrRenderStyle({ "display": "none" })}" data-v-857ac51d><meta itemprop="price" content="0" data-v-857ac51d><meta itemprop="priceCurrency" content="USD" data-v-857ac51d></span></article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/games/MemoryMatchPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MemoryMatchPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-857ac51d"]]);
export {
  MemoryMatchPage as default
};
