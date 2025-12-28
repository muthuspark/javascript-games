import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { u as useGameLoader, a as useGameSeo, B as Breadcrumb, G as GameFaqs, R as RelatedGames } from "./RelatedGames-Bqp8dbEn.js";
import { _ as _export_sfc } from "../main.mjs";
import "@unhead/vue";
import "vite-ssg";
const _sfc_main = {
  __name: "MinesweeperPage",
  __ssrInlineRender: true,
  setup(__props) {
    const game = {
      slug: "minesweeper",
      title: "Minesweeper Online - Classic Puzzle Game",
      shortTitle: "Minesweeper",
      description: "Play classic Minesweeper online. Reveal squares while avoiding hidden mines. Numbers indicate adjacent mines. Three difficulty levels available.",
      metaDescription: "Play Minesweeper online free with easy, medium, and hard modes. Classic puzzle game - uncover squares without hitting mines. No download needed.",
      categories: ["Puzzles", "Logic Games", "Classic Games"],
      keywords: ["minesweeper", "minesweeper online", "mine sweeper game", "puzzle game", "logic puzzle"],
      initCode: "initGame();",
      faqs: [
        {
          question: "How do you play Minesweeper?",
          answer: "Click to reveal squares. Numbers show how many mines are adjacent. Right-click to flag suspected mines. Reveal all non-mine squares to win."
        },
        {
          question: "What do the numbers mean in Minesweeper?",
          answer: "Each number indicates how many of the 8 surrounding squares contain mines. Use this information to deduce safe squares."
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
      }, _attrs))} data-v-bfe915c6>`);
      _push(ssrRenderComponent(Breadcrumb, { items: breadcrumbItems }, null, _parent));
      _push(`<header class="mb-4" data-v-bfe915c6><h1 class="mb-2" itemprop="name" data-v-bfe915c6>${ssrInterpolate(game.title)}</h1><p class="text-muted lead" itemprop="description" data-v-bfe915c6>${ssrInterpolate(game.description)}</p><div class="mb-3" data-v-bfe915c6><!--[-->`);
      ssrRenderList(game.categories, (category) => {
        _push(`<span class="badge bg-success me-2" itemprop="genre" data-v-bfe915c6>${ssrInterpolate(category)}</span>`);
      });
      _push(`<!--]--></div></header><section class="game-section" aria-label="Game Area" data-v-bfe915c6><div class="controls" data-v-bfe915c6><div class="difficulty-buttons" data-v-bfe915c6><button class="btn btn-success" onclick="setDifficulty(&#39;easy&#39;)" data-v-bfe915c6>Easy</button><button class="btn btn-warning" onclick="setDifficulty(&#39;medium&#39;)" data-v-bfe915c6>Medium</button><button class="btn btn-danger" onclick="setDifficulty(&#39;hard&#39;)" data-v-bfe915c6>Hard</button></div><button class="btn btn-info" onclick="initGame()" data-v-bfe915c6>New Game</button><div id="mine-count" data-v-bfe915c6></div></div><div id="status" class="status" data-v-bfe915c6></div><div id="game-board" class="game-board" data-v-bfe915c6></div></section>`);
      _push(ssrRenderComponent(GameFaqs, {
        faqs: game.faqs
      }, null, _parent));
      _push(ssrRenderComponent(RelatedGames, {
        currentSlug: game.slug,
        categories: game.categories
      }, null, _parent));
      _push(`<meta itemprop="url"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/`)} data-v-bfe915c6><meta itemprop="image"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/thumbnail.png`)} data-v-bfe915c6><meta itemprop="applicationCategory" content="Game" data-v-bfe915c6><meta itemprop="operatingSystem" content="Web Browser" data-v-bfe915c6><span itemprop="offers" itemscope itemtype="https://schema.org/Offer" style="${ssrRenderStyle({ "display": "none" })}" data-v-bfe915c6><meta itemprop="price" content="0" data-v-bfe915c6><meta itemprop="priceCurrency" content="USD" data-v-bfe915c6></span></article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/games/MinesweeperPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const MinesweeperPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bfe915c6"]]);
export {
  MinesweeperPage as default
};
