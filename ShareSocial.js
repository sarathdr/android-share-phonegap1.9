var ShareSocial = function() {};

ShareSocial.prototype.sms = function(param, successCallback, failCallback) {

    function success(args) {
        successCallback(args);
    }

    function fail(args) {
    	failCallback(args);
    }

	return PhoneGap.exec(function(args) {
		success(args);
	}, function(args) {
		fail(args);
	}, 'ShareSocial', 'startSmsActivity', [param]);
};

ShareSocial.prototype.email = function(param, successCallback, failCallback) {

    function success(args) {
        successCallback(args);
    }

    function fail(args) {
    failCallback(args);
    }

	return PhoneGap.exec(function(args) {
	success(args);
	}, function(args) {
	fail(args);
	}, 'ShareSocial', 'startEmailActivity', [param]);
};

ShareSocial.prototype.social = function(param, successCallback, failCallback) {

    function success(args) {
        successCallback(args);
    }

    function fail(args) {
    failCallback(args);
    }

	return PhoneGap.exec(function(args) {
	success(args);
	}, function(args) {
	fail(args);
	}, 'ShareSocial', 'startSocialActivity', [param]);
};
