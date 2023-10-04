<script>
	import Nav from '../components/nav/nav.svelte';

	import '../app.css';
	import Footer from '../components/footer.svelte';
</script>

<svelte:head>
	<title>O'Donnells Bar and Grill</title>
</svelte:head>

<div class="">
	<Nav />
	<div class="scrollbar-hide">
		<slot />
	</div>
	<Footer />
</div>
