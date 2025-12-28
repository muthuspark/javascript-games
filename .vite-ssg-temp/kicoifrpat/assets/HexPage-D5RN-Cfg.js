import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { u as useGameLoader, a as useGameSeo, B as Breadcrumb, G as GameFaqs, R as RelatedGames } from "./RelatedGames-Bqp8dbEn.js";
import { _ as _export_sfc } from "../main.mjs";
import "@unhead/vue";
import "vite-ssg";
const _sfc_main = {
  __name: "HexPage",
  __ssrInlineRender: true,
  setup(__props) {
    const game = {
      slug: "hex",
      title: "Hex Game - Connection Strategy Puzzle",
      shortTitle: "Hex",
      description: "Play Hex against AI. Connect your sides of the board before your opponent. A classic connection strategy game with simple rules but deep tactics.",
      metaDescription: "Play Hex online free against AI. Connect your edges of the hexagonal board before your opponent. Classic strategy game invented by mathematicians with multiple board sizes.",
      categories: ["Strategy Games", "Logic Games", "Classic Games"],
      keywords: ["hex game", "hex board game", "connection game", "strategy game", "hexagonal game", "Nash game", "two player game", "abstract strategy"],
      initCode: "newGame();",
      faqs: [
        {
          question: "What is the Hex game and how do you play?",
          answer: "Hex is a two-player abstract strategy game played on a diamond-shaped hexagonal grid. One player (Blue) tries to connect the top edge to the bottom edge, while the other player (Red) tries to connect the left edge to the right edge. Players take turns placing one piece on any empty cell. The first player to create a connected path between their two sides wins. The game was invented independently by mathematician Piet Hein in 1942 and John Nash in 1948."
        },
        {
          question: "Is there always a winner in Hex?",
          answer: 'Yes! Unlike many strategy games, Hex cannot end in a draw. This is because the board can only be completely filled when one player has formed a winning connection. Mathematically, this is known as the "Hex theorem" - when the board is full, exactly one player must have a winning path.'
        },
        {
          question: "What is a good strategy for Hex?",
          answer: `Key strategies include: 1) Control the center of the board, as central positions connect to more cells. 2) Create "bridges" - pairs of cells that can be connected on your next turn regardless of your opponent's move. 3) Think ahead and visualize possible paths. 4) Block your opponent while building your own connection. The first player has a theoretical advantage, which is why the "swap rule" is sometimes used in competitive play.`
        },
        {
          question: "What do the different difficulty levels mean?",
          answer: "Easy: AI makes random moves. Medium: AI uses simple heuristics like preferring center positions and building connections. Hard: AI evaluates board positions more deeply, looking for winning moves and blocking opportunities. Larger board sizes (9x9, 11x11) provide more complex strategic depth."
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
      }, _attrs))} data-v-5a7e45bf>`);
      _push(ssrRenderComponent(Breadcrumb, { items: breadcrumbItems }, null, _parent));
      _push(`<header class="mb-4" data-v-5a7e45bf><h1 class="mb-2" itemprop="name" data-v-5a7e45bf>${ssrInterpolate(game.title)}</h1><p class="text-muted lead" itemprop="description" data-v-5a7e45bf>${ssrInterpolate(game.description)}</p><div class="mb-3" data-v-5a7e45bf><!--[-->`);
      ssrRenderList(game.categories, (category) => {
        _push(`<span class="badge bg-success me-2" itemprop="genre" data-v-5a7e45bf>${ssrInterpolate(category)}</span>`);
      });
      _push(`<!--]--></div></header><section id="game_main_container" class="game-section" aria-label="Game Area" data-v-5a7e45bf><div class="game-controls" data-v-5a7e45bf><label for="boardSizeSelect" data-v-5a7e45bf>Board Size:</label><select id="boardSizeSelect" onchange="changeBoardSize()" data-v-5a7e45bf><option value="5" data-v-5a7e45bf>5x5</option><option value="7" selected data-v-5a7e45bf>7x7</option><option value="9" data-v-5a7e45bf>9x9</option><option value="11" data-v-5a7e45bf>11x11</option></select><label for="difficultySelect" data-v-5a7e45bf>Difficulty:</label><select id="difficultySelect" onchange="changeDifficulty()" data-v-5a7e45bf><option value="easy" data-v-5a7e45bf>Easy</option><option value="medium" selected data-v-5a7e45bf>Medium</option><option value="hard" data-v-5a7e45bf>Hard</option></select><button class="new-game-btn" onclick="newGame()" data-v-5a7e45bf>New Game</button></div><div id="gameStatus" data-v-5a7e45bf>Your turn - Click a cell to place your piece</div><div class="game-info" data-v-5a7e45bf><div class="player-info" data-v-5a7e45bf><div class="player-indicator blue" data-v-5a7e45bf></div><span class="player-label" data-v-5a7e45bf>You (Blue) - Connect Top to Bottom</span></div><div class="player-info" data-v-5a7e45bf><div class="player-indicator red" data-v-5a7e45bf></div><span class="player-label" data-v-5a7e45bf>AI (Red) - Connect Left to Right</span></div></div><div class="board-container" data-v-5a7e45bf><div id="hexBoard" data-v-5a7e45bf></div></div><div class="instructions-box" data-v-5a7e45bf><h3 data-v-5a7e45bf>How to Play Hex</h3><ul data-v-5a7e45bf><li data-v-5a7e45bf><span class="goal-indicator" data-v-5a7e45bf><span class="color-box blue" data-v-5a7e45bf></span> Blue (You)</span>: Connect the top edge to the bottom edge</li><li data-v-5a7e45bf><span class="goal-indicator" data-v-5a7e45bf><span class="color-box red" data-v-5a7e45bf></span> Red (AI)</span>: Connect the left edge to the right edge</li><li data-v-5a7e45bf>Take turns placing one piece on any empty cell</li><li data-v-5a7e45bf>First player to create a connected path between their two sides wins</li><li data-v-5a7e45bf>There are no draws in Hex - someone always wins!</li></ul></div></section>`);
      _push(ssrRenderComponent(GameFaqs, {
        faqs: game.faqs
      }, null, _parent));
      _push(ssrRenderComponent(RelatedGames, {
        currentSlug: game.slug,
        categories: game.categories
      }, null, _parent));
      _push(`<meta itemprop="url"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/`)} data-v-5a7e45bf><meta itemprop="image"${ssrRenderAttr("content", `https://games.muthu.co/posts/${game.slug}/thumbnail.png`)} data-v-5a7e45bf><meta itemprop="applicationCategory" content="Game" data-v-5a7e45bf><meta itemprop="operatingSystem" content="Web Browser" data-v-5a7e45bf><span itemprop="offers" itemscope itemtype="https://schema.org/Offer" style="${ssrRenderStyle({ "display": "none" })}" data-v-5a7e45bf><meta itemprop="price" content="0" data-v-5a7e45bf><meta itemprop="priceCurrency" content="USD" data-v-5a7e45bf></span></article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/games/HexPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HexPage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5a7e45bf"]]);
export {
  HexPage as default
};
