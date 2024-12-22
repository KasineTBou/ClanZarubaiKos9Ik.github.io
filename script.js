<script>
function openModal(imageSrc) {
    const modal = document.getElementById('modal');
     const modalImage = document.getElementById('modal-image');
    modalImage.src = imageSrc;
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}
</script>
