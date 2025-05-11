<?php
// Determine which page to load
$page = isset($_GET['page']) ? $_GET['page'] : 'home'; // default to home

// Define allowed pages to prevent unauthorized file access
$allowed_pages = ['home', 'introduction', 'contract'];

// Check if the requested page is allowed
if (!in_array($page, $allowed_pages)) {
    $page = 'home'; // fallback to home if page not allowed
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title><?php echo ucfirst($page); ?> Alexander Ascencio's Arctic Wolf | WEB250</title>
<link rel="stylesheet" href="styles/default.css">
<script src="https://lint.page/kit/880bd5.js" crossorigin="anonymous"></script>

</head>
<body>
<!-- Include header component -->
<?php include 'components/header.php'; ?>
<main>
<!-- Main content area -->
<div id="main-content">
    <?php include 'contents/' . $page . '.php'; ?>
</div>
</main>
<!-- Include footer component -->
<?php include 'components/footer.php'; ?>
</body>
</html>
