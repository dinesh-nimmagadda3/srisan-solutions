<?php
// SSL Solutions Contact Form Handler
// Proper session configuration
ini_set('session.cookie_httponly', 1);
ini_set('session.use_only_cookies', 1);
// Only use secure cookies on HTTPS
ini_set('session.cookie_secure', 1); // Change to 1 if your site uses HTTPS

// Start session for CSRF protection
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// Set error reporting for debugging (remove in production)
// ini_set('display_errors', 1);
// error_reporting(E_ALL);

// Directory to store rate limiting information
$rate_limit_dir = __DIR__ . '/rate_limit';

// Create directory if it doesn't exist
if (!file_exists($rate_limit_dir)) {
    mkdir($rate_limit_dir, 0755, true);
}

// IP Rate limiting - Check before processing anything
$ip_address = $_SERVER['REMOTE_ADDR'];
$ip_file = $rate_limit_dir . '/' . md5($ip_address) . '.txt';
$max_submissions = 5; // Maximum number of submissions allowed
$time_period = 3600; // Time period in seconds (1 hour)

// Current time
$current_time = time();

// Initialize or load submission times
$submission_times = [];
if (file_exists($ip_file)) {
    $submission_times = unserialize(file_get_contents($ip_file));
    
    // Remove submissions older than the time period
    $submission_times = array_filter($submission_times, function($time) use ($current_time, $time_period) {
        return ($current_time - $time) < $time_period;
    });
}

// Check if maximum submissions exceeded
if (count($submission_times) >= $max_submissions) {
    echo json_encode(['success' => false, 'message' => 'Too many submissions. Please try again later.']);
    exit;
}

// Check if form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Initialize response array
    $response = ['success' => false, 'message' => ''];
    
    // Get form data - Updated for SSL Solutions form fields
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $company = $_POST['company'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $message = $_POST['message'] ?? '';
    
    // HONEYPOT CHECK - SSL Solutions uses 'website' as honeypot field
    if (!empty($_POST['website'])) {
        // Silent failure for bots - just exit without error message
        exit;
    }
    
    // TIME-BASED CHECK - Too fast submissions are likely bots
    $form_time = isset($_POST['form_time']) ? (int)$_POST['form_time'] : 0;
    $time_difference = $current_time - $form_time;
    
    if ($time_difference < 2) {
        // Form submitted too quickly - probably a bot
        exit;
    }
    
    if ($time_difference > 86400) { // 24 hours
        $response['message'] = 'Form session has expired. Please reload the page and try again.';
        echo json_encode($response);
        exit;
    }
    
    // CSRF TOKEN CHECK - Use a more tolerant approach
    $submitted_token = $_POST['csrf_token'] ?? '';
    $stored_token = $_SESSION['csrf_token'] ?? '';
    
    // Only validate if the session actually has a token (prevents issues with new sessions)
    if (!empty($stored_token) && (empty($submitted_token) || $submitted_token !== $stored_token)) {
        $response['message'] = 'Security verification failed. Please reload the page and try again.';
        echo json_encode($response);
        exit;
    }
    
    // Basic validation - Updated for SSL Solutions required fields
    if (empty($name) || empty($email) || empty($message)) {
        $response['message'] = 'Please fill in all required fields (Name, Email, and Message).';
        echo json_encode($response);
        exit;
    }
    
    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $response['message'] = 'Please enter a valid email address.';
        echo json_encode($response);
        exit;
    }
    
    // Message length validation
    if (strlen($message) < 10) {
        $response['message'] = 'Message must be at least 10 characters long.';
        echo json_encode($response);
        exit;
    }
    
    if (strlen($message) > 500) {
        $response['message'] = 'Message cannot exceed 500 characters.';
        echo json_encode($response);
        exit;
    }
    
    // Phone validation (optional field)
    if (!empty($phone)) {
        $phone_cleaned = preg_replace('/[^\d]/', '', $phone);
        if (strlen($phone_cleaned) < 7 || strlen($phone_cleaned) > 15) {
            $response['message'] = 'Please enter a valid phone number.';
            echo json_encode($response);
            exit;
        }
    }
    
    // SPAM CONTENT CHECK - Updated for SAP consulting context
    function containsSpamKeywords($text) {
        $spam_keywords = [
            'viagra', 'cialis', 'casino', 'lottery', 'prize', 'winner', 
            'loan', 'bitcoin', 'crypto', 'investment opportunity',
            'million dollar', 'free money', 'make money fast',
            'click here', 'urgent', 'limited time', 'act now'
        ];
        
        foreach ($spam_keywords as $keyword) {
            if (stripos($text, $keyword) !== false) {
                return true;
            }
        }
        
        return false;
    }
    
    // Check for spam in message
    if (containsSpamKeywords($message)) {
        $response['message'] = 'Your message appears to contain prohibited content.';
        echo json_encode($response);
        exit;
    }
    
    // Check for excessive URLs (common in spam)
    $url_count = preg_match_all('/(https?:\/\/[^\s]+)/', $message, $matches);
    if ($url_count > 2) {
        $response['message'] = 'Too many links in your message.';
        echo json_encode($response);
        exit;
    }
    
    // Sanitize inputs for email
    $name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
    $email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
    $company = htmlspecialchars($company, ENT_QUOTES, 'UTF-8');
    $phone = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
    $message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');
    
    // Prepare email
    
    // Set email recipient - SSL Solutions email
    $to = "info@srisan.com"; // SSL Solutions email
    
    // Set email subject
    $emailSubject = "New SAP Consultation Inquiry from $name";
    if (!empty($company)) {
        $emailSubject .= " ($company)";
    }
    
    // Prepare HTML email body for professional appearance
    $emailBody = "
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .header { background-color: #ea580c; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #ea580c; }
            .footer { background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #666; }
        </style>
    </head>
    <body>
        <div class='header'>
            <h2>New SAP Consultation Inquiry</h2>
            <p>SSL Solutions Limited - Boutique SAP Consulting</p>
        </div>
        
        <div class='content'>
            <div class='field'>
                <span class='label'>Name:</span><br>
                $name
            </div>
            
            <div class='field'>
                <span class='label'>Email:</span><br>
                <a href='mailto:$email'>$email</a>
            </div>";
    
    if (!empty($company)) {
        $emailBody .= "
            <div class='field'>
                <span class='label'>Company:</span><br>
                $company
            </div>";
    }
    
    if (!empty($phone)) {
        $emailBody .= "
            <div class='field'>
                <span class='label'>Phone:</span><br>
                <a href='tel:$phone'>$phone</a>
            </div>";
    }
    
    $emailBody .= "
            <div class='field'>
                <span class='label'>Message:</span><br>
                " . nl2br($message) . "
            </div>
        </div>
        
        <div class='footer'>
            <p>This inquiry was submitted on " . date('F j, Y \a\t g:i A T') . " via the SSL Solutions contact form.</p>
            <p>Please respond within 24 hours to maintain our service commitment.</p>
        </div>
    </body>
    </html>";
    
    // Set email headers for HTML email
    $headers = "From: SSL Solutions <noreply@sslsolutions.co.uk>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
    $headers .= "X-Priority: 1\r\n"; // High priority for business inquiries
    
    // Send email
    $success = mail($to, $emailSubject, $emailBody, $headers);
    
    // Optional: Send a professional confirmation email to the sender
    if ($success) {
        $senderSubject = "Thank you for contacting SSL Solutions - We'll be in touch soon";
        $senderMessage = "
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .header { background-color: #ea580c; color: white; padding: 20px; text-align: center; }
                .content { padding: 20px; }
                .footer { background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #666; }
            </style>
        </head>
        <body>
            <div class='header'>
                <h2>Thank You for Your Inquiry</h2>
                <p>SSL Solutions Limited - Boutique SAP Consulting</p>
            </div>
            
            <div class='content'>
                <p>Dear $name,</p>
                
                <p>Thank you for reaching out to SSL Solutions regarding your SAP requirements. We have received your inquiry and appreciate your interest in our boutique SAP consulting services.</p>
                
                <p><strong>What happens next:</strong></p>
                <ul>
                    <li>Our team will review your requirements within 24 hours</li>
                    <li>We'll contact you to discuss your specific needs and timeline</li>
                    <li>If applicable, we'll schedule a consultation to explore how we can help</li>
                </ul>
                
                <p><strong>Your inquiry summary:</strong></p>
                <p><em>" . substr($message, 0, 200) . (strlen($message) > 200 ? '...' : '') . "</em></p>
                
                <p>With over 20 years of SAP consulting experience and trusted partnerships with global leaders like Shell and AstraZeneca, we're confident we can help you achieve your SAP objectives.</p>
                
                <p>If you have any urgent questions, please don't hesitate to contact us directly at info@srisan.com or visit our website.</p>
                
                <p>Best regards,<br>
                <strong>The SSL Solutions Team</strong><br>
                Boutique SAP Consulting</p>
            </div>
            
            <div class='footer'>
                <p>SSL Solutions Limited | London, United Kingdom</p>
                <p>This is an automated confirmation. Please do not reply to this email.</p>
            </div>
        </body>
        </html>";
        
        $senderHeaders = "From: SSL Solutions <info@srisan.com>\r\n";
        $senderHeaders .= "Reply-To: info@srisan.com\r\n";
        $senderHeaders .= "MIME-Version: 1.0\r\n";
        $senderHeaders .= "Content-Type: text/html; charset=UTF-8\r\n";
        $senderHeaders .= "X-Mailer: PHP/" . phpversion() . "\r\n";
        
        mail($email, $senderSubject, $senderMessage, $senderHeaders);
    }
    
    // Record this submission for rate limiting
    $submission_times[] = $current_time;
    file_put_contents($ip_file, serialize($submission_times));
    
    // Return response
    if ($success) {
        $response['success'] = true;
        $response['message'] = 'Thank you for your inquiry! We have received your message and will contact you within 24 hours to discuss your SAP requirements.';
    } else {
        $response['message'] = 'There was an error sending your message. Please try again later or contact us directly at info@srisan.com.';
    }
    
    echo json_encode($response);
    exit;
}

// If accessed directly without POST data, return error
http_response_code(405);
echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
exit;
?>