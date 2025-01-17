(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function l(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=l(o);fetch(o.href,r)}})();const g=`<section class="todoapp">\r
    <header class="header">\r
        <h1>Theocratic</h1>\r
        <input id="new-todo-input" class="new-todo" placeholder="¿Qué necesita ser hecho?" autofocus>\r
    </header>\r
    \r
    <!-- This section should be hidden by default and shown when there are todos -->\r
    <section class="main">\r
        <input id="toggle-all" class="toggle-all" type="checkbox">\r
        <label for="toggle-all">Mark all as complete</label>\r
        <ul class="todo-list">\r
            <!-- These are here just to show the structure of the list items -->\r
            <!-- List items should get the class "editing" when editing and "completed" when marked as completed -->\r
            <!-- <li class="completed" data-id="abc">\r
                <div class="view">\r
                    <input class="toggle" type="checkbox" checked>\r
                    <label>Probar JavaScript</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Create a TodoMVC template">\r
            </li> -->\r
            <!-- <li>\r
                <div class="view">\r
                    <input class="toggle" type="checkbox">\r
                    <label>Comprar un unicornio</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Rule the web">\r
            </li> -->\r
        </ul>\r
    </section>\r
\r
    <!-- This footer should hidden by default and shown when there are todos -->\r
    <footer class="footer">\r
        <!-- This should be "0 items left" by default -->\r
        <span class="todo-count"><strong id="pending-count">0</strong> pendiente(s)</span>\r
        <!-- Remove this if you don't implement routing -->\r
        <ul class="filters">\r
            <li>\r
                <a class="selected filtro" class="selected" href="#/">Todos</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/active">Pendientes</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/completed">Completados</a>\r
            </li>\r
        </ul>\r
        <!-- Hidden if no completed items are left ↓ -->\r
        <button class="clear-completed">Borrar completados</button>\r
    </footer>\r
</section>\r
\r
\r
<footer class="info">\r
    <p>Template creado por <a href="http://sindresorhus.com">Sindre Sorhus</a></p>\r
    <!-- Change this out with your name and url ↓ -->\r
    <p>Creado por <a href="http://todomvc.com">ti</a></p>\r
    <p>Parte de <a href="http://todomvc.com">TodoMVC</a></p>\r
</footer>`,n=[];for(let e=0;e<256;++e)n.push((e+256).toString(16).slice(1));function y(e,t=0){return(n[e[t+0]]+n[e[t+1]]+n[e[t+2]]+n[e[t+3]]+"-"+n[e[t+4]]+n[e[t+5]]+"-"+n[e[t+6]]+n[e[t+7]]+"-"+n[e[t+8]]+n[e[t+9]]+"-"+n[e[t+10]]+n[e[t+11]]+n[e[t+12]]+n[e[t+13]]+n[e[t+14]]+n[e[t+15]]).toLowerCase()}let m;const w=new Uint8Array(16);function b(){if(!m){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");m=crypto.getRandomValues.bind(crypto)}return m(w)}const T=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),f={randomUUID:T};function v(e,t,l){var o;if(f.randomUUID&&!e)return f.randomUUID();e=e||{};const i=e.random??((o=e.rng)==null?void 0:o.call(e))??b();if(i.length<16)throw new Error("Random bytes length must be >= 16");return i[6]=i[6]&15|64,i[8]=i[8]&63|128,y(i)}class d{constructor(t){this.id=v(),this.description=t,this.done=!1,this.createAt=new Date}}const a={All:"all",Completed:"completed",Pending:"pending"},s={todos:[new d("Predicar"),new d("Estudio en familia"),new d("Estudio personal"),new d("Reunion"),new d("Visita de pastoreo"),new d("Informes de servicio")],filter:a.All},E=()=>{console.log(s),console.log("InitStore")},L=()=>{throw new Error("Not Implemented")},S=(e=a.All)=>{switch(e){case a.All:return[...s.todos];case a.Completed:return s.todos.filter(t=>t.done===!0);case a.Pending:return s.todos.filter(t=>t.done===!1);default:throw new Error(`Option ${e} is not valid.`)}},C=e=>{if(!e)throw new Error("Description is required");s.todos.push(new d(e))},A=e=>{s.todos=s.todos.map(t=>(t.id===e&&(t.done=!t.done),t))},D=e=>{s.todos=s.todos.filter(t=>t.id!==e)},I=()=>{s.todos=s.todos.filter(e=>e.done===!0)},U=(e=a.All)=>{s.filter=e},x=()=>s.filter,c={initStore:E,loadStore:L,getTodos:S,addTodo:C,toggleTodo:A,deleteTodo:D,deleteCompleted:I,setSelectFilter:U,getCurrentFilter:x},P=e=>{if(!e)throw new Error("Todo is required");const t=`
                <div class="view">
                    <input class="toggle" type="checkbox" ${e.done?"checked":""}>
                    <label>${e.description}</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="Create a TodoMVC template">
                `,l=document.createElement("li");return l.innerHTML=t,l.setAttribute("data-id",e.id),e.done&&l.classList.add("completed"),l};let u;const M=(e,t=[])=>{if(u||(u=document.querySelector(e)),!u)throw new Error(`Element ${e} not found`);u.innerHTML="",t.forEach(l=>{u.append(P(l))})},h={TodoList:".todo-list",NewTodoImput:"#new-todo-input"},R=e=>{const t=()=>{const o=c.getTodos(c.getCurrentFilter());M(h.TodoList,o)};(()=>{const o=document.createElement("div");o.innerHTML=g,document.querySelector(e).append(o),t()})();const l=document.querySelector(h.NewTodoImput),i=document.querySelector(h.TodoList);l.addEventListener("keyup",o=>{o.keyCode===13&&o.target.value.trim().length!==0&&(c.addTodo(o.target.value),t(),o.target.value="")}),i.addEventListener("click",o=>{const r=o.target.closest("[data-id]");c.toggleTodo(r.getAttribute("data-id")),t()}),i.addEventListener("click",o=>{o.target.className==="destroy"&&(c.deleteTodo(o.target.closest("[data-id]").getAttribute("data-id")),t())})};c.initStore();R("#app");
